using store_back.Models;

namespace store_back.REPOS
{
    public class CategoriesRepo:ICategories
    {
        private readonly Data db = new Data();

        public CategoriesRepo(Data _db)
        {
            db = _db;
        }
    }
}
