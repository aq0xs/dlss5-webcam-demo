document.getElementById('problem-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const problem = document.getElementById('problem').value;
    
    // هنا يمكنك إضافة كود لإرسال المشكلة إلى الخادم والحصول على الحل
    fetch('/get-solution', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ problem }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('solution').innerText = data.solution;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
