import { test, expect } from '@playwright/test'

test.describe('Reservation Flow', () => {
  test('should complete reservation flow', async ({ page }) => {
    // Navigate to home
    await page.goto('/')
    expect(await page.title()).toContain('Smart Parking')

    // Navigate to map
    await page.click('text=Find Parking')
    await expect(page).toHaveURL('/map')

    // Check map is loaded
    const mapContainer = page.locator('.leaflet-container')
    await expect(mapContainer).toBeVisible()
  })

  test('should login successfully', async ({ page }) => {
    await page.goto('/login')
    await page.fill('input[type="email"]', 'test@example.com')
    await page.fill('input[type="password"]', 'password123')
    await page.click('button[type="submit"]')
  })
})
