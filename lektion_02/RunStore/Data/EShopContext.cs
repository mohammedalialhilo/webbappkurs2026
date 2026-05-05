using Microsoft.EntityFrameworkCore;
using RunStore.Models;

namespace RunStore.Data;

public class EShopContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Product> Products { get; set; }

}
