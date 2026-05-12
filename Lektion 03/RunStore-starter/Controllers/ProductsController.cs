using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RunStore.Data;

namespace RunStore.Controllers
{
    public class ProductsController(EShopContext context) : Controller
    {
        public async Task<ActionResult> Index()
        {
            var products = await context.Products.ToListAsync();

            return View(products);
        }

        public async Task<ActionResult> Details(int Id)
        {
            var product = await context.Products.FindAsync(Id);
            return View(product);
        }

    }
}
