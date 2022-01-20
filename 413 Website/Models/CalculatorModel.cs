using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace _413_Website.Models
{/*Create Model with all of the getters and setters for calculator*/
    public class CalculatorModel
    {
        [Required]
        public int Assignment { get; set; }
        [Required]
        public int Project { get; set; }
        [Required]
        public int Quiz { get; set; }
        [Required]
        public int Exam { get; set; }
        [Required]
        public int Intex { get; set; }

    }
}
