import { Calendar, MapPin, User } from 'lucide-react';

export function Projects() {
    const projects = [
        {
            id: 1,
            title: 'Villa Modern Minimalis',
            client: 'PT. Properti Sejahtera',
            location: 'Jakarta Selatan',
            date: 'Desember 2025',
            image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
            description: 'Proyek renovasi villa mewah menggunakan kayu jati premium untuk lantai dan panel dinding',
            materials: ['Kayu Jati', 'Kayu Oak'],
        },
        {
            id: 2,
            title: 'Restoran Klasik Eropa',
            client: 'Brasserie du Monde',
            location: 'Bandung',
            date: 'November 2025',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
            description: 'Interior restoran dengan furnitur kayu walnut dan oak untuk suasana klasik yang elegan',
            materials: ['Kayu Walnut', 'Kayu Oak'],
        },
        {
            id: 3,
            title: 'Kantor Corporate Modern',
            client: 'Tech Innovation Inc.',
            location: 'Surabaya',
            date: 'Oktober 2025',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
            description: 'Desain interior kantor modern dengan panel kayu dekoratif dan meja meeting custom',
            materials: ['Kayu Mahoni', 'Kayu Pine'],
        },
        {
            id: 4,
            title: 'Rumah Tropis Kontemporer',
            client: 'Keluarga Wijaya',
            location: 'Bali',
            date: 'September 2025',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
            description: 'Hunian tropis dengan lantai kayu jati dan furnitur custom dari kayu solid',
            materials: ['Kayu Jati', 'Kayu Mahoni'],
        },
        {
            id: 5,
            title: 'Cafe Industrial Chic',
            client: 'Kopi Nusantara',
            location: 'Yogyakarta',
            date: 'Agustus 2025',
            image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
            description: 'Konsep industrial dengan aksen kayu reclaimed dan furnitur custom',
            materials: ['Kayu Oak', 'Kayu Pine'],
        },
        {
            id: 6,
            title: 'Hotel Boutique Luxury',
            client: 'Archipelago Hotels',
            location: 'Seminyak, Bali',
            date: 'Juli 2025',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
            description: 'Interior hotel mewah dengan panel kayu walnut dan furnitur custom premium',
            materials: ['Kayu Walnut', 'Kayu Jati'],
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-12">
                <h1 className="text-5xl text-[#2D2A26] mb-4">Proyek Kami</h1>
                <p className="text-lg text-[#706C66] max-w-2xl">
                    Lihat berbagai proyek yang telah kami kerjakan dengan menggunakan kayu berkualitas premium
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group bg-white rounded-2xl overflow-hidden border border-[#E8E3DC] hover:shadow-2xl transition-all duration-300"
                    >
                        {/* Image */}
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-xl text-[#2D2A26] mb-3 group-hover:text-[#DC143C] transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-[#706C66] text-sm mb-4 line-clamp-2">
                                {project.description}
                            </p>

                            {/* Meta Info */}
                            <div className="space-y-2 mb-4">
                                <div className="flex items-center gap-2 text-sm text-[#706C66]">
                                    <User className="w-4 h-4 text-[#DC143C]" />
                                    {project.client}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-[#706C66]">
                                    <MapPin className="w-4 h-4 text-[#DC143C]" />
                                    {project.location}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-[#706C66]">
                                    <Calendar className="w-4 h-4 text-[#DC143C]" />
                                    {project.date}
                                </div>
                            </div>

                            {/* Materials */}
                            <div className="flex flex-wrap gap-2">
                                {project.materials.map((material, index) => (
                                    <span
                                        key={index}
                                        className="text-xs bg-[#F5F1EB] text-[#DC143C] px-3 py-1 rounded-full"
                                    >
                                        {material}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-[#DC143C] rounded-3xl p-12 text-center">
                <h2 className="text-3xl text-white mb-4">Punya Proyek?</h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                    Hubungi kami untuk konsultasi gratis dan dapatkan solusi kayu terbaik untuk proyek Anda
                </p>
                <button className="bg-white text-[#DC143C] px-8 py-3 rounded-lg hover:bg-[#F5F1EB] transition-all hover:shadow-lg">
                    Hubungi Kami Sekarang
                </button>
            </div>
        </section>
    );
}
