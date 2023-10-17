using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using store_back.REPOS;

namespace store_back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        IProducts product;
        public ProductController(IProducts _prod) 
        {
            product = _prod;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(product.GetAllProduct());
        }
        [HttpGet("{key},{value}")]
        public IActionResult GetSpecificProducts(int key,string? value)
        {
            return Ok(product.GetAllspecificProduct(key,value));
        }
    }
}
