using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PuppyApp.Models;

namespace PuppyApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PuppyController : ControllerBase
    {
        private PuppyDbContext _db;
        public PuppyController(PuppyDbContext puppyDb)
        {
            _db = puppyDb; 
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_db.Puppies);
        }

        [HttpPost]
        public IActionResult Post(Puppy puppy)
        {
            _db.Puppies.Add(puppy);
            _db.SaveChanges();
            return Ok();
        }
    }
}
