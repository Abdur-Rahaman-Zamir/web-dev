// Contact Form Script

document.addEventListener("DOMContentLoaded", function () {
    
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // ফর্ম রিফ্রেশ হওয়া বন্ধ করে

        const name = form.querySelector("input[type='text']").value.trim();
        const phone = form.querySelectorAll("input[type='text']")[1].value.trim();
        const message = form.querySelector("textarea").value.trim();

        // Basic Validation
        if (name === "" || phone === "" || message === "") {
            alert("⚠ সব ঘর ঠিকভাবে পূরণ করুন।");
            return;
        }

        // Phone check (only digits allowed)
        if (!/^[0-9]{10}$/.test(phone)) {
            alert("⚠ মোবাইল নম্বর সঠিকভাবে দিন (১০ ডিজিট)।");
            return;
        }

        // Success
        alert("✅ আপনার মেসেজ সফলভাবে পাঠানো হয়েছে! ধন্যবাদ।");

        form.reset(); // Clear form
    });

});