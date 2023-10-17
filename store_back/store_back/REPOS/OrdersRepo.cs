using Microsoft.EntityFrameworkCore;
using store_back.Models;

namespace store_back.REPOS
{
    public class OrdersRepo : IOrders
    {
        private readonly Data db;

        public OrdersRepo(Data _db)
        {
            db = _db;
        }

        public List<Orders> GetAll()
        {
            var data = db.Orders.Include("Product").ToList();
            return data;
        }
        public void InsertOrder(Orders order, Products product)
        {
            Orders newOrder = new Orders();
            newOrder.Id = order.Id;
            newOrder.Product_id = product.Id; // Assuming 'Product_id' is the foreign key property in the 'Orders' entity

            db.Orders.Add(newOrder);
            db.SaveChanges();
        }
        public void Delete(int id)
        {
            Orders oldOrder = db.Orders.FirstOrDefault(x => x.Id == id);
            db.Orders.Remove(oldOrder);
            db.SaveChanges();
        }

        public void Truncate()
        {
            db.Database.ExecuteSqlRaw("TRUNCATE TABLE Orders");
            db.SaveChanges();
        }
    }
}