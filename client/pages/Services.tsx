import { Layout } from "@/components/Layout";
import { useMeta } from "@/hooks/use-meta";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

export default function Services() {
  useMeta({
    title: "Laundry & Dry Cleaning Services | Laundrify Gurgaon",
    description:
      "Explore our comprehensive laundry services including express laundry, men's dry cleaning, women's dry cleaning, and woolen care. Transparent pricing with up to 20% OFF.",
    keywords:
      "laundry services, dry cleaning services, mens dry clean, womens dry clean, woolen care, express service",
  });

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-white opacity-95">
            Professional laundry and dry cleaning with transparent pricing
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-center text-lg bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-semibold mb-4">
              ⭐ Up to 20% OFF | Express Service (&lt;24 Hrs)
            </p>
            <p className="text-center text-lg text-slate-600">
              Free Pickup &amp; Delivery Available
            </p>
          </div>

          <Tabs defaultValue="laundry" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8 bg-slate-100">
              <TabsTrigger
                value="laundry"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-500 data-[state=active]:text-white"
              >
                Laundry
              </TabsTrigger>
              <TabsTrigger
                value="mens"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-500 data-[state=active]:text-white"
              >
                Men's Dry
              </TabsTrigger>
              <TabsTrigger
                value="womens"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-500 data-[state=active]:text-white"
              >
                Women's Dry
              </TabsTrigger>
              <TabsTrigger
                value="woolen"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-500 data-[state=active]:text-white"
              >
                Woolen
              </TabsTrigger>
              <TabsTrigger
                value="shoe"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-500 data-[state=active]:text-white"
              >
                Shoe Care
              </TabsTrigger>
            </TabsList>

            {/* Laundry Services */}
            <TabsContent value="laundry">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Laundry Services
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 bg-gradient-to-r from-purple-600 to-pink-500">
                        <th className="text-left py-3 px-4 font-bold text-white">
                          Service
                        </th>
                        <th className="text-right py-3 px-4 font-bold text-white">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="py-3 px-4">
                          Laundry with Fold (per Kg)
                        </td>
                        <td className="py-3 px-4 text-right font-semibold text-purple-600">
                          ₹80
                        </td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="py-3 px-4">
                          Laundry with Iron (per Kg)
                        </td>
                        <td className="py-3 px-4 text-right font-semibold text-purple-600">
                          ₹120
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>

            {/* Men's Dry Clean */}
            <TabsContent value="mens">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Dry Clean - Men's Wear
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 bg-gradient-to-r from-purple-600 to-pink-500">
                        <th className="text-left py-3 px-4 font-bold text-white">
                          Item
                        </th>
                        <th className="text-right py-3 px-4 font-bold text-white">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Shirt/T-Shirt", "₹100"],
                        ["Trouser/Jeans", "₹120"],
                        ["Coat", "₹240"],
                        ["Mens Suit 2 pcs", "₹360"],
                        ["Mens Suit 3 pcs", "₹540"],
                        ["Kurta/Pyjama", "₹220"],
                        ["Achkan", "₹300"],
                        ["Kurta", "₹120"],
                      ].map(([item, price]) => (
                        <tr
                          key={item}
                          className="border-b border-slate-200 hover:bg-slate-50"
                        >
                          <td className="py-3 px-4">{item}</td>
                          <td className="py-3 px-4 text-right font-semibold text-purple-600">
                            {price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>

            {/* Women's Dry Clean */}
            <TabsContent value="womens">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Dry Clean - Women's Wear
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 bg-gradient-to-r from-purple-600 to-pink-500">
                        <th className="text-left py-3 px-4 font-bold text-white">
                          Item
                        </th>
                        <th className="text-right py-3 px-4 font-bold text-white">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Kurta/Kurti", "₹120"],
                        ["Salwar/Plazo Dupatta", "₹120"],
                        ["Saree Simple / Silk", "₹240"],
                        ["Saree Heavy", "₹300"],
                        ["Blouse", "₹90"],
                        ["Dress", "₹240"],
                        ["Top", "₹140"],
                        ["Lehenga 1 Pc", "₹400"],
                        ["Lehenga 2+ Pc", "₹600"],
                        ["Lehenga Heavy", "₹700"],
                        ["Lehenga Bridal", "₹1000"],
                        ["Skirt Heavy", "₹180"],
                      ].map(([item, price]) => (
                        <tr
                          key={item}
                          className="border-b border-slate-200 hover:bg-slate-50"
                        >
                          <td className="py-3 px-4">{item}</td>
                          <td className="py-3 px-4 text-right font-semibold text-purple-600">
                            {price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>

            {/* Woolen Care */}
            <TabsContent value="woolen">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Dry Clean - Woolen & Other Household Items
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-purple-600 mb-4">
                      Woolen Items
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <tbody>
                          {[
                            ["Jacket F/H Sleeves", "₹240"],
                            ["Sweater / Sweat Shirt", "₹220"],
                            ["Long Coat", "₹300"],
                            ["Shawl", "₹220"],
                            ["Pashmina", "₹300"],
                            ["Leather Jacket", "₹480"],
                          ].map(([item, price]) => (
                            <tr
                              key={item}
                              className="border-b border-slate-200 hover:bg-slate-50"
                            >
                              <td className="py-3 px-4 text-sm">{item}</td>
                              <td className="py-3 px-4 text-right font-semibold text-purple-600 text-sm">
                                {price}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-600 mb-4">
                      Household Items
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <tbody>
                          {[
                            ["Curtains / Panel", "₹180"],
                            ["Blanket / Quilt Single", "₹300"],
                            ["Blanket / Quilt Double", "₹400"],
                            ["Bedsheet Single", "₹150"],
                            ["Bedsheet Double", "₹200"],
                          ].map(([item, price]) => (
                            <tr
                              key={item}
                              className="border-b border-slate-200 hover:bg-slate-50"
                            >
                              <td className="py-3 px-4 text-sm">{item}</td>
                              <td className="py-3 px-4 text-right font-semibold text-purple-600 text-sm">
                                {price}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Shoe Care */}
            <TabsContent value="shoe">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Shoe Care (Dry Cleaning)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 bg-gradient-to-r from-purple-600 to-pink-500">
                        <th className="text-left py-3 px-4 font-bold text-white">
                          Item
                        </th>
                        <th className="text-right py-3 px-4 font-bold text-white">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Sneaker / Sports Shoes", "₹300"],
                        ["Leather Shoes", "₹400"],
                        ["Boots Ankle Length", "₹400"],
                        ["Boots Knee Length", "₹500"],
                      ].map(([item, price]) => (
                        <tr
                          key={item}
                          className="border-b border-slate-200 hover:bg-slate-50"
                        >
                          <td className="py-3 px-4">{item}</td>
                          <td className="py-3 px-4 text-right font-semibold text-purple-600">
                            {price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Special Offers */}
          <div className="mt-16 p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Special Offers & Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="text-3xl">🎁</div>
                <div>
                  <p className="font-bold text-slate-900">Up to 20% Discount</p>
                  <p className="text-slate-600">
                    On express services completed in less than 24 hours
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">🚚</div>
                <div>
                  <p className="font-bold text-slate-900">
                    Free Pickup & Delivery
                  </p>
                  <p className="text-slate-600">
                    Complimentary service across both branches
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">⚡</div>
                <div>
                  <p className="font-bold text-slate-900">Express Service</p>
                  <p className="text-slate-600">
                    Get your clothes ready in just 45 minutes
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">24/7</div>
                <div>
                  <p className="font-bold text-slate-900">Always Available</p>
                  <p className="text-slate-600">
                    Round-the-clock service for your convenience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
