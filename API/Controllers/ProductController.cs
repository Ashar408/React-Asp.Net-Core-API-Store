using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    public class ProductController : BaseApiController
    {
        private readonly StoreContext context;
        public ProductController(StoreContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts(){
            return await context.Products.ToListAsync();
        
        }  
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id){
            var product= await context.Products.FindAsync(id);
            if(product==null) return NotFound();
            return product;
        }
    }
}