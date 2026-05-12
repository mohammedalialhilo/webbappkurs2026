namespace RunStore.Models;

public class Product
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string Description { get; set; }
    public double Price { get; set; }
    public string? ImageUrl { get; set; }
}
