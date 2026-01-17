import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Contact() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-12">
                <h1 className="text-5xl text-[#2D2A26] mb-4">Hubungi Kami</h1>
                <p className="text-lg text-[#706C66] max-w-2xl">
                    Ada pertanyaan atau ingin berkonsultasi? Tim kami siap membantu Anda
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white rounded-3xl p-8 border border-[#E8E3DC]">
                    <h2 className="text-2xl text-[#2D2A26] mb-6">Kirim Pesan</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-[#2D2A26] mb-2">Nama Lengkap</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-lg border border-[#E8E3DC] focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-transparent"
                                placeholder="Masukkan nama Anda"
                            />
                        </div>

                        <div>
                            <label className="block text-[#2D2A26] mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-lg border border-[#E8E3DC] focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-transparent"
                                placeholder="nama@email.com"
                            />
                        </div>

                        <div>
                            <label className="block text-[#2D2A26] mb-2">Nomor Telepon</label>
                            <input
                                type="tel"
                                className="w-full px-4 py-3 rounded-lg border border-[#E8E3DC] focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-transparent"
                                placeholder="+62 xxx xxxx xxxx"
                            />
                        </div>

                        <div>
                            <label className="block text-[#2D2A26] mb-2">Subjek</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-lg border border-[#E8E3DC] focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-transparent"
                                placeholder="Perihal pesan Anda"
                            />
                        </div>

                        <div>
                            <label className="block text-[#2D2A26] mb-2">Pesan</label>
                            <textarea
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg border border-[#E8E3DC] focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-transparent resize-none"
                                placeholder="Tulis pesan Anda di sini..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#DC143C] text-white px-8 py-3 rounded-lg hover:bg-[#B01030] transition-all hover:shadow-lg"
                        >
                            Kirim Pesan
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                    {/* Info Cards */}
                    <div className="bg-white rounded-2xl p-6 border border-[#E8E3DC]">
                        <div className="flex items-start gap-4">
                            <div className="bg-[#F5F1EB] p-3 rounded-xl">
                                <Phone className="w-6 h-6 text-[#DC143C]" />
                            </div>
                            <div>
                                <h3 className="text-lg text-[#2D2A26] mb-2">Telepon</h3>
                                <p className="text-[#706C66]">+62 21 1234 5678</p>
                                <p className="text-[#706C66]">+62 812 3456 7890</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-[#E8E3DC]">
                        <div className="flex items-start gap-4">
                            <div className="bg-[#F5F1EB] p-3 rounded-xl">
                                <Mail className="w-6 h-6 text-[#DC143C]" />
                            </div>
                            <div>
                                <h3 className="text-lg text-[#2D2A26] mb-2">Email</h3>
                                <p className="text-[#706C66]">info@alfiefurniture.com</p>
                                <p className="text-[#706C66]">sales@alfiefurniture.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-[#E8E3DC]">
                        <div className="flex items-start gap-4">
                            <div className="bg-[#F5F1EB] p-3 rounded-xl">
                                <MapPin className="w-6 h-6 text-[#DC143C]" />
                            </div>
                            <div>
                                <h3 className="text-lg text-[#2D2A26] mb-2">Alamat</h3>
                                <p className="text-[#706C66]">
                                    Jl. Kayu Manis No. 123<br />
                                    Jakarta Selatan 12345<br />
                                    Indonesia
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-[#E8E3DC]">
                        <div className="flex items-start gap-4">
                            <div className="bg-[#F5F1EB] p-3 rounded-xl">
                                <Clock className="w-6 h-6 text-[#DC143C]" />
                            </div>
                            <div>
                                <h3 className="text-lg text-[#2D2A26] mb-2">Jam Operasional</h3>
                                <p className="text-[#706C66]">Senin - Jumat: 08:00 - 17:00</p>
                                <p className="text-[#706C66]">Sabtu: 09:00 - 15:00</p>
                                <p className="text-[#706C66]">Minggu: Tutup</p>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-white rounded-2xl overflow-hidden border border-[#E8E3DC] h-64">
                        <div className="w-full h-full bg-[#F5F1EB] flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-12 h-12 text-[#DC143C] mx-auto mb-3" />
                                <p className="text-[#706C66]">Peta Lokasi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
