import { TreePine, Leaf, Shield, Sparkles } from 'lucide-react';

export function AboutWood() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-12">
                <h1 className="text-5xl text-[#2D2A26] mb-4">Tentang Kayu Kami</h1>
                <p className="text-lg text-[#706C66] max-w-2xl">
                    Pelajari lebih lanjut tentang kualitas, sumber, dan keunggulan kayu premium kami
                </p>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 rounded-3xl overflow-hidden mb-16">
                <img
                    src="https://images.unsplash.com/photo-1683115100702-af818681184d?w=1200&q=80"
                    alt="Wood Workshop"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center">
                    <div className="px-12">
                        <h2 className="text-4xl text-white mb-4">Kualitas yang Dapat Dipercaya</h2>
                        <p className="text-xl text-white/90 max-w-xl">
                            Setiap potongan kayu dipilih dengan cermat untuk memastikan kualitas terbaik
                        </p>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <div className="bg-white rounded-2xl p-8 border border-[#E8E3DC] hover:shadow-xl transition-all">
                    <div className="bg-[#F5F1EB] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                        <TreePine className="w-8 h-8 text-[#DC143C]" />
                    </div>
                    <h3 className="text-xl text-[#2D2A26] mb-3">Sumber Berkelanjutan</h3>
                    <p className="text-[#706C66]">
                        Semua kayu kami berasal dari hutan yang dikelola secara berkelanjutan dan bertanggung jawab
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-[#E8E3DC] hover:shadow-xl transition-all">
                    <div className="bg-[#F5F1EB] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                        <Shield className="w-8 h-8 text-[#DC143C]" />
                    </div>
                    <h3 className="text-xl text-[#2D2A26] mb-3">Terjamin Kualitas</h3>
                    <p className="text-[#706C66]">
                        Setiap produk melalui kontrol kualitas ketat untuk memastikan standar tertinggi
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-[#E8E3DC] hover:shadow-xl transition-all">
                    <div className="bg-[#F5F1EB] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                        <Leaf className="w-8 h-8 text-[#DC143C]" />
                    </div>
                    <h3 className="text-xl text-[#2D2A26] mb-3">Ramah Lingkungan</h3>
                    <p className="text-[#706C66]">
                        Komitmen kami terhadap lingkungan tercermin dalam setiap aspek bisnis kami
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-[#E8E3DC] hover:shadow-xl transition-all">
                    <div className="bg-[#F5F1EB] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                        <Sparkles className="w-8 h-8 text-[#DC143C]" />
                    </div>
                    <h3 className="text-xl text-[#2D2A26] mb-3">Finishing Premium</h3>
                    <p className="text-[#706C66]">
                        Berbagai pilihan finishing untuk menghadirkan keindahan alami kayu
                    </p>
                </div>
            </div>

            {/* Wood Types */}
            <div className="bg-white rounded-3xl p-12 border border-[#E8E3DC]">
                <h2 className="text-3xl text-[#2D2A26] mb-8">Jenis Kayu Kami</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl text-[#DC143C] mb-4">Kayu Jati</h3>
                        <p className="text-[#706C66] mb-6">
                            Kayu jati terkenal dengan kekuatan, daya tahan, dan keindahan alaminya. Sempurna untuk furnitur mewah dan aplikasi eksterior.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl text-[#DC143C] mb-4">Kayu Oak</h3>
                        <p className="text-[#706C66] mb-6">
                            Oak menawarkan kekuatan luar biasa dan pola serat yang indah, ideal untuk lantai dan furnitur klasik.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl text-[#DC143C] mb-4">Kayu Walnut</h3>
                        <p className="text-[#706C66] mb-6">
                            Walnut memberikan warna gelap yang kaya dan tekstur halus, sempurna untuk furnitur premium dan panel dekoratif.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl text-[#DC143C] mb-4">Kayu Mahoni</h3>
                        <p className="text-[#706C66] mb-6">
                            Mahoni dikenal dengan warna merah kecoklatan yang indah dan kemudahan dalam pengerjaan, ideal untuk berbagai aplikasi.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
