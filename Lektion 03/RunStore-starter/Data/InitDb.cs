using Microsoft.EntityFrameworkCore;
using RunStore.Models;

namespace RunStore.Data;


public class CreateDatabase
{
    public static async Task InitDb(WebApplication app)
    {
        using var scope = app.Services.CreateScope();

        var context = scope.ServiceProvider.GetRequiredService<EShopContext>()
            ?? throw new InvalidOperationException("Failed to retrieve eshop context");

        await SeedData(context);

    }

    private static async Task SeedData(EShopContext context)
    {
        context.Database.Migrate();

        if (context.Products.Any()) return;

        var products = new List<Product>
        {
            new() {
                Name = "Core 2000",
                Description =
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 1295,
                ImageUrl = "/images/shoe-1.jpg",

            },
            new() {
                Name = "Trail 25",
                Description =
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 1895,
                ImageUrl = "/images/shoe-2.jpg",

            },
            new() {
                Name = "Gel 27",
                Description =
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 2295,
                ImageUrl = "/images/shoe-3.jpg",

            },
            new() {
                Name = "Sonoma 7GTX",
                Description =
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 2295,
                ImageUrl = "/images/shoe-4.jpg",

            },
            new() {
                Name = "Road White t-shirt",
                Description =
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 495,
                ImageUrl = "/images/t-shirt-1.jpg",

            },
            new() {
                Name = "Limited Running t-shirt",
                Description =
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 385,
                ImageUrl = "/images/t-shirt-2.jpg",

            },
            new() {
                Name = "Road Black t-shirt",
                Description =
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 495,
                ImageUrl = "/images/t-shirt-1.jpg",

            },
            new() {
                Name = "Vest pro",
                Description =
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 895,
                ImageUrl = "/images/vest-1.jpg",

            },
            new() {
                Name = "Vest unisex",
                Description =
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 895,
                ImageUrl = "/images/vest-2.jpg",

            },
            new() {
                Name = "Jacket",
                Description =
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 1495,
                ImageUrl = "/images/jacket-1.jpg",

            },
        };

        context.Products.AddRange(products);
        await context.SaveChangesAsync();
    }
}
