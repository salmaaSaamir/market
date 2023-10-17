using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace store_back.Models
{
    public class Orders
    {
        [Key]
        public int Id { get; set; }
        [Required]

        [ForeignKey("Product")]
        public int Product_id { get; set; }

        public Products Product { get; set; } 
    }
}
