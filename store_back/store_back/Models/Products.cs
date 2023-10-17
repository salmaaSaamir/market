using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace store_back.Models
{
    public class Products
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public float Price { get; set; }
        [ForeignKey("Category")]
        public int Category_id { get; set; }

        public Categories Category { get; set; }

        [Required]
        public string Image { get; set; }
    }
}
