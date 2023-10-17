using store_back.DTO;
using store_back.Models;

namespace store_back.REPOS
{
    public interface IProducts
    {
        List<ProductWithCategory> GetAllProduct();
        List<ProductWithCategory> GetAllspecificProduct(int key, string value);
        Products GetAllspecificProductById(int id);
    }
}