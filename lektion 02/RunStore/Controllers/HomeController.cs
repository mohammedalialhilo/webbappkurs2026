using Microsoft.AspNetCore.Mvc;

namespace RunStore.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
