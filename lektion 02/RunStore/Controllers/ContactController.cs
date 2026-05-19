using Microsoft.AspNetCore.Mvc;
using RunStore.Models;

namespace RunStore.Controllers
{
    public class ContactController : Controller
    {
        // GET: ContactController
        [HttpGet()]
        public ActionResult Index()
        {
            var model = new ContactModel();
            return View(model);
        }
        [HttpPost()]
        public ActionResult SendInfo(ContactModel model)
        {

            return View("Confirmation", model);

        }

    }
}
