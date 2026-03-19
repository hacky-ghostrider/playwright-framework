import { test, expect } from '@playwright/test';
import { APIClient } from '../../api/apiClient';
import { ENDPOINTS } from '../../api/endpoints';

let apiClient: APIClient;

test.beforeAll(async () => {
  apiClient = new APIClient();
  await apiClient.init();
});

test('GET Users API - Validate response', async () => {
  const response = await apiClient.get(ENDPOINTS.USERS);

  console.log('Status:', response.status());

  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log(body);

  expect(body.length).toBeGreaterThan(0);
  expect(body[0]).toHaveProperty('id');
  expect(body[0]).toHaveProperty('email');
});

test('POST Create User - Validate response', async () => {
  const requestBody = {
    name: 'Cyber Rider',
    email: 'cyber@test.com'
  };

  const response = await apiClient.post(ENDPOINTS.POSTS, requestBody);

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.name).toBe(requestBody.name);
});