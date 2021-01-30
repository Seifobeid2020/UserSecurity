using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserSecurity.Models;

namespace UserSecurity.Data
{
    public class UserContext : DbContext
    {

        public UserContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
        }
        public DbSet<LoginModel> LoginModels { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<LoginModel>().HasData(new LoginModel
            {
                Id = 1,
                UserName = "seif",
                Password = "seif",
                Role = "Manager"
            });
        }
    }
}
