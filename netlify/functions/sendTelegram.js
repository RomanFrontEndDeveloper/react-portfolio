export async function handler(event, context) {
	if (event.httpMethod !== 'POST') {
		return { statusCode: 405, body: 'Method Not Allowed' };
	}

	try {
		const { name, message } = JSON.parse(event.body);

		// Env змінні
		const botToken = process.env.TELEGRAM_BOT_TOKEN;
		const chatId = process.env.TELEGRAM_CHAT_ID;

		const text = `✉️ НОВЕ ПОВІДОМЛЕННЯ\n\n👤 Ім'я: ${name}\n💬 Повідомлення: ${message}`;

		// URL
		const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

		// Запит у Telegram
		const res = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: chatId,
				text: text,
			}),
		});

		const data = await res.json();
		console.log('Telegram response:', data);

		return { statusCode: 200, body: 'Повідомлення надіслано!' };
	} catch (error) {
		console.error(error);
		return { statusCode: 500, body: 'Помилка при відправці' };
	}
}
