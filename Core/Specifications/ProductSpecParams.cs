namespace Core.Specifications;

public class ProductSpecParams
{
    private const int MaxPageSize = 50;
    // page number defaulted to 1
    public int PageIndex { get; set; } = 1;
    
    // backing property used to store data exposed in PageSize. Default is 6, but client can override
    private int _pageSize = 6;

    public int PageSize
    {
        get => _pageSize;
        // if client sets page size > max, return max. Else, return page size. prevents returning more than 50 results for a single req
        set => _pageSize = (value > MaxPageSize) ? MaxPageSize : value;
    }
    
    public int? BrandId { get; set; }
    public int? TypeId { get; set; }
    public string? Sort { get; set; }
    private string _search;

    // TODO: search and sort = nullable -> Potential bugs here
    public string? Search
    {
        get => _search;
        // values entered within search bar converted to lowercase
        set => _search = value.ToLower();
    }

}