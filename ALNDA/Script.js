// For any JavaScript functionality you need later (e.g., form validation, form submission, etc.)
document.addEventListener('DOMContentLoaded', function() {
    // Example of simple validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const email = document.querySelector('[name="email"]').value;
        const name = document.querySelector('[name="name"]').value;
        const password = document.querySelector('[name="password"]').value;

        if (!email || !name || !password) {
            event.preventDefault();
            alert("Please fill all the fields.");
        }
        // يمكنك إضافة التفاعلات هنا في المستقبل إذا لزم الأمر

// مثال: تفعيل الزر فقط إذا كانت الحقول مكتملة
document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // عملية إرسال النموذج أو التأكد من صحة البيانات
    alert('تم إرسال البيانات بنجاح!');
});

    });
});
