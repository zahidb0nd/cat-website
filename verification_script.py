from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Go to localhost
    try:
        page.goto("http://localhost:3000")

        # Wait for the testimonials section
        testimonial_header = page.get_by_text("What Our Cat Parents Say")
        testimonial_header.scroll_into_view_if_needed()
        page.wait_for_timeout(1000)

        # Find the scroll container specifically in the testimonials section
        scroll_container = page.locator("section:has-text('What Our Cat Parents Say') .overflow-x-auto")

        # Debug widths
        scroll_width = scroll_container.evaluate("(element) => element.scrollWidth")
        client_width = scroll_container.evaluate("(element) => element.clientWidth")
        print(f"Scroll width: {scroll_width}, Client width: {client_width}")

        # Check initial scrollLeft
        initial_scroll = scroll_container.evaluate("(element) => element.scrollLeft")
        print(f"Initial scrollLeft: {initial_scroll}")

        # Scroll it using scrollTo
        scroll_container.evaluate("(element) => element.scrollTo({left: 500, behavior: 'auto'})")
        page.wait_for_timeout(1000)

        # Check new scrollLeft
        new_scroll = scroll_container.evaluate("(element) => element.scrollLeft")
        print(f"New scrollLeft: {new_scroll}")

        # Take another screenshot
        page.screenshot(path="testimonials_scrolled_final.png")

        print("Screenshots taken successfully.")

    except Exception as e:
        print(f"Error: {e}")
        page.screenshot(path="error.png")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
