using store_back.Models;

namespace store_back.REPOS
{
    public interface IOrders
    {
        List<Orders> GetAll();
        public void InsertOrder(Orders order, Products product);
        public void Delete(int id);
        public void Truncate();
    }
}