from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Go to home page
        page.goto("http://localhost:3000")

        # 1. Check TrustBadge in Hero
        # It's in the hero section.
        print("Checking TrustBadge...")
        page.wait_for_selector("text=EST. 2017 • WCF REGISTERED")
        page.screenshot(path="verification_hero.png", full_page=False)

        # 2. Check AboutTimeline badge
        # Scroll down to About section
        print("Checking AboutTimeline...")
        # Locating the text "EST. 2017 • WCF REGISTERED" again, but this time in AboutTimeline.
        # It appears multiple times now. I'll try to find the one in the timeline footer.
        # The timeline footer has "Serving the Global Cat Community Since 2017" replaced by "EST. 2017 • WCF REGISTERED".
        # I'll scroll to the "Our Story" section.
        about_section = page.get_by_text("Our Story")
        about_section.scroll_into_view_if_needed()
        page.screenshot(path="verification_about.png")

        # 3. Check ReservationForm
        print("Checking ReservationForm...")
        # Scroll to Reservation Form
        # Text: "Breeding Excellence Since 2017 | WCF & FCI Registered Cattery"
        res_form_text = page.get_by_text("Breeding Excellence Since 2017 | WCF & FCI Registered Cattery")
        res_form_text.scroll_into_view_if_needed()
        page.screenshot(path="verification_reservation.png")

        # 4. Check Testimonials
        print("Checking Testimonials...")
        # Scroll to Testimonials
        # Text: "Established in 2017 and it shows!"
        testimonial_text = page.get_by_text("Established in 2017 and it shows!")
        testimonial_text.scroll_into_view_if_needed()
        page.screenshot(path="verification_testimonials.png")

        browser.close()

if __name__ == "__main__":
    verify_changes()
