using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MyFirstApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExampleController : ControllerBase
    {
        private List<string> _data = new List<string>();

        public ExampleController() {
            _data.Add("test1");
            _data.Add("test2");
        }

        [HttpGet]
        public ActionResult Get()
        {
            return Ok(_data);
        }
    }
}
