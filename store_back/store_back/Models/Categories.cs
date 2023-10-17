using System.ComponentModel.DataAnnotations;

namespace store_back.Models
{
    public class Categories
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
    }
}
