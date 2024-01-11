using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PuppyApp.Models;

namespace PuppyApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PuppiesController : ControllerBase
    {
        private readonly PuppyDbContext _context;

        public PuppiesController(PuppyDbContext context)
        {
            _context = context;
        }

        // GET: api/Puppies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Puppy>>> GetPuppies()
        {
          if (_context.Puppies == null)
          {
              return NotFound();
          }
            return await _context.Puppies.ToListAsync();
        }

        // GET: api/Puppies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Puppy>> GetPuppy(int id)
        {
          if (_context.Puppies == null)
          {
              return NotFound();
          }
            var puppy = await _context.Puppies.FindAsync(id);

            if (puppy == null)
            {
                return NotFound();
            }

            return puppy;
        }

        // PUT: api/Puppies/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPuppy(int id, Puppy puppy)
        {
            if (id != puppy.Id)
            {
                return BadRequest();
            }

            _context.Entry(puppy).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PuppyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Puppies
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Puppy>> PostPuppy(Puppy puppy)
        {
          if (_context.Puppies == null)
          {
              return Problem("Entity set 'PuppyDbContext.Puppies'  is null.");
          }
            _context.Puppies.Add(puppy);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPuppy", new { id = puppy.Id }, puppy);
        }

        // DELETE: api/Puppies/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePuppy(int id)
        {
            if (_context.Puppies == null)
            {
                return NotFound();
            }
            var puppy = await _context.Puppies.FindAsync(id);
            if (puppy == null)
            {
                return NotFound();
            }

            _context.Puppies.Remove(puppy);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PuppyExists(int id)
        {
            return (_context.Puppies?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
