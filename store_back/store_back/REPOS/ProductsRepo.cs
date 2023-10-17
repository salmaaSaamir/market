using Microsoft.EntityFrameworkCore;
using store_back.DTO;
using store_back.Models;
using System.Collections.Generic;

namespace store_back.REPOS

{
    public class ProductsRepo: IProducts
    {
        private readonly Data db = new Data();

        public ProductsRepo(Data _db) 
        {
            db = _db;
        }
       public List<ProductWithCategory> GetAllProduct()
        {
            List<ProductWithCategory> prodWithcAT = new List<ProductWithCategory>();
            var data = db.Products.Include("Category").ToList();
            foreach (var item in data)
            {
                ProductWithCategory prod = new ProductWithCategory();
                prod.Id = item.Id;
                prod.price = item.Price;
                prod.Name = item.Name;
                prod.CategoryName = item.Category.Name;
                prod.Image= item.Image;
                prodWithcAT.Add(prod);
            }
            return prodWithcAT;
        }
        public List<ProductWithCategory> GetAllspecificProduct(int key ,string? value)
        {
            List<ProductWithCategory> prodWithcAT = new List<ProductWithCategory>();

            if (key == 0 || value == "")
            {
                var data = db.Products.Include("Category").ToList();
                foreach (var item in data)
                {
                    ProductWithCategory prod = new ProductWithCategory();
                    prod.price = item.Price;
                    prod.Name = item.Name;
                    prod.CategoryName = item.Category.Name;
                    prod.Image = item.Image;
                    prodWithcAT.Add(prod);
                }
            }
            if (key == 1)
            {
                var data = db.Products.Include("Category").Where(x => x.Name.Contains(value)).ToList();
                foreach (var item in data)
                {
                    ProductWithCategory prod = new ProductWithCategory();
                    prod.price = item.Price;
                    prod.Name = item.Name;
                    prod.CategoryName = item.Category.Name;
                    prod.Image = item.Image;
                    prodWithcAT.Add(prod);
                }
            }else if (key == 2)
            {
                var data = db.Products.Include("Category").Where(x => x.Category.Name.Contains(value)).ToList();
                foreach (var item in data)
                {
                    ProductWithCategory prod = new ProductWithCategory();
                    prod.price = item.Price;
                    prod.Name = item.Name;
                    prod.CategoryName = item.Category.Name;
                    prod.Image = item.Image;
                    prodWithcAT.Add(prod);
                }
            }
            else if (key == 3)
            {
                var data = db.Products.Include("Category").Where(x => x.Price == int.Parse(value)).ToList();
                foreach (var item in data)
                {
                    ProductWithCategory prod = new ProductWithCategory();
                    prod.price = item.Price;
                    prod.Name = item.Name;
                    prod.CategoryName = item.Category.Name;
                    prod.Image = item.Image;
                    prodWithcAT.Add(prod);
                }
            }

            return prodWithcAT;
        }
        public Products GetAllspecificProductById(int id)
        {
            return db.Products.FirstOrDefault(x => x.Id == id);
        }
    }
}
