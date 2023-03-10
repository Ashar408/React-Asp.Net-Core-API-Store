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
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
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
            return await context.Products.FindAsync(id);
        }
    }
}