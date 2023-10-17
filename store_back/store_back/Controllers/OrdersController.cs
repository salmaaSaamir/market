using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using store_back.Migrations;
using store_back.Models;
using store_back.REPOS;

namespace store_back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        IOrders Order;
        IProducts prod ;
        public OrdersController(IOrders order,IProducts prod) 
        {
            this.Order = order;
            this.prod = prod;
        }
        [HttpGet]
        public IActionResult Getall()
        {
            return Ok(Order.GetAll());
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (id != 0)
            {
                Order.Delete(id);
                return Ok("deleted successfully");
            }
            return BadRequest(); 
        }
        [HttpDelete]
        public IActionResult Trancate()
        {
            Order.Truncate();
            return Ok("trancated successfully");
        }
        [HttpPost]
        public IActionResult AddOrder([FromBody] Orders order)
        {
            if (ModelState.IsValid)
            {
                Products product = prod.GetAllspecificProductById(order.Product_id);
                if (product != null)
                {
                    Order.InsertOrder(order, product);
                    return Ok("Inserted successfully");
                }
                else
                {
                    return NotFound("Product not found");
                }
            }
            return BadRequest(order);
        }
    }
}
