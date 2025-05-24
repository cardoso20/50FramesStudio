using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using MimeKit;

namespace _50FramesStudio.Pages
{
	public class IndexModel : PageModel
	{
		[BindProperty]
		public string Email { get; set; }

		[BindProperty]
		public string Name { get; set; }

		[BindProperty]
		public DateTime Date { get; set; }

		[BindProperty]
		public string PhoneNumber { get; set; }

		public string SuccessMessage { get; set; }

		private readonly ILogger<IndexModel> _logger;

		public IndexModel(ILogger<IndexModel> logger)
		{
			_logger = logger;
		}

		public void OnGet()
		{

		}

		public async Task<IActionResult> OnPostAsync()
		{
			if (!ModelState.IsValid)
			{
				return Page();
			}

			var fromAddress = "noreply@studio50frames.pt";
			var fromPassword = "Solardosjorges2025@"; // ideally from configuration

			var smtpServer = "studio50frames.pt"; // your SMTP server
			var smtpPort = 465; // your SMTP port

			//var userEmail = new MimeMessage();
			//userEmail.From.Add(MailboxAddress.Parse(fromAddress));
			//userEmail.To.Add(MailboxAddress.Parse(Email)); // user's email
			//userEmail.Subject = "50FramesPorSegundos | Sessão agendada";
			//userEmail.Body = new TextPart(MimeKit.Text.TextFormat.Html)
			//{
			//	Text = $"<p>Olá {Name},</p><p>A sessão foi agendada com sucesso para o dia {Date.ToString("dd/MM/yyyy")} às {Date.ToString("HH:mm")}.</p>"
			//};

			// Email 2: To the info@domain.com
			var adminEmail = new MimeMessage();
			adminEmail.From.Add(MailboxAddress.Parse(fromAddress));
			adminEmail.To.Add(MailboxAddress.Parse("info@studio50frames.pt"));
			adminEmail.Subject = "Sessão agendada";
			adminEmail.Body = new TextPart(MimeKit.Text.TextFormat.Html)
			{
				Text = $"<p>Foi agendada uma sessão para o dia {Date.ToString("dd/MM/yyyy")} às {Date.ToString("HH:mm")}.</p><p>Contactos:<br/>Nome: {Name}<br/>Email: {Email}<br/>Telemóvel: {PhoneNumber}</p>"
			};

			try
			{
				using var smtp = new SmtpClient();
				await smtp.ConnectAsync(smtpServer, smtpPort);
				await smtp.AuthenticateAsync(fromAddress, fromPassword);

				// Send both emails
				//await smtp.SendAsync(userEmail);
				await smtp.SendAsync(adminEmail);

				await smtp.DisconnectAsync(true);


				SuccessMessage = "A sua sessão foi agendada com sucesso. Vai receber um email de confirmação.";

				Email = string.Empty;
				Date = DateTime.Now;
				PhoneNumber = string.Empty;
				Name = string.Empty;
			}
			catch (Exception ex)
			{
				throw;
			}

			return Page();
		}
	}
}
