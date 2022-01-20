using Microsoft.AspNetCore.Mvc;
using _413_Website.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _413_Website.Controllers
{
    public class homeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        //Created Get and Post 
        [HttpGet]
        public IActionResult Calculator()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Calculator(CalculatorModel model)
        {
            return View();
        }
    }
}
