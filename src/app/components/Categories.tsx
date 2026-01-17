import { Package, Sofa, Home, Palette } from 'lucide-react';

export function Categories() {
    const categories = [
        {
            id: 1,
            name: 'Furnitur',
            description: 'Kayu berkualitas tinggi untuk pembuatan mebel dan furnitur rumah',
            icon: Sofa,
            image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
            count: 45,
        },
        {
            id: 2,
            name: 'Lantai',
            description: 'Material kayu untuk lantai yang tahan lama dan indah',
            icon: Home,
            image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80',
            count: 32,
        },
        {
            id: 3,
            name: 'Konstruksi',
            description: 'Kayu struktural untuk kebutuhan konstruksi bangunan',
            icon: Package,
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
            count: 28,
        },
        {
            id: 4,
            name: 'Dekoratif',
            description: 'Panel dan aksen kayu untuk dekorasi interior',
            icon: Palette,
            image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
            count: 38,
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-12">
                <h1 className="text-5xl text-[#2D2A26] mb-4">Kategori Produk</h1>
                <p className="text-lg text-[#706C66] max-w-2xl">
                    Jelajahi berbagai kategori kayu kami yang dipilih khusus untuk kebutuhan proyek Anda
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                        <div
                            key={category.id}
                            className="group relative bg-white rounded-2xl overflow-hidden border border-[#E8E3DC] hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                {/* Icon */}
                                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                                    <Icon className="w-8 h-8 text-[#DC143C]" />
                                </div>

                                {/* Count Badge */}
                                <div className="absolute bottom-6 right-6 bg-[#D4AF37] text-white px-4 py-2 rounded-full text-sm font-medium">
                                    {category.count} Produk
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl text-[#2D2A26] mb-3 group-hover:text-[#DC143C] transition-colors">
                                    {category.name}
                                </h3>
                                <p className="text-[#706C66] leading-relaxed mb-4">
                                    {category.description}
                                </p>
                                <button className="text-[#DC143C] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Lihat Produk
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 border border-[#E8E3DC] text-center">
                    <div className="text-3xl text-[#DC143C] mb-2">143+</div>
                    <div className="text-[#706C66]">Total Produk</div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E8E3DC] text-center">
                    <div className="text-3xl text-[#D4AF37] mb-2">15+</div>
                    <div className="text-[#706C66]">Jenis Kayu</div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E8E3DC] text-center">
                    <div className="text-3xl text-[#DC143C] mb-2">4</div>
                    <div className="text-[#706C66]">Kategori Utama</div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E8E3DC] text-center">
                    <div className="text-3xl text-[#D4AF37] mb-2">100%</div>
                    <div className="text-[#706C66]">Kualitas Premium</div>
                </div>
            </div>
        </section>
    );
}
