using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data;

public class GenericRepository<T> : IGenericRepository<T> where T : BaseEntity
{
    private readonly StoreContext _context;

    public GenericRepository(StoreContext context)
    {
        _context = context;
    }
    
    public async Task<T> GetIdAsAsync(int id)
    {
        return await _context.Set<T>().FindAsync(id);
    }
    
    public async Task<IReadOnlyList<T>> ListAllAsync(int id)
    {
        return await _context.Set<T>().ToListAsync();
    }
}