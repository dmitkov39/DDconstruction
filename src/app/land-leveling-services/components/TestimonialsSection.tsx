import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const TestimonialsSection = () => {
  const testimonials = [
  {
    id: 1,
    name: 'Иван Петров',
    role: 'Собственик на жилищен комплекс',
    location: 'София',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18b21ef66-1763294858765.png",
    alt: 'Middle-aged Bulgarian man in business casual attire smiling confidently',
    rating: 5,
    text: 'D&D Construction заравниха 3500 м² за нашия жилищен комплекс. Работата беше изпълнена с изключителна прецизност - постигнаха толеранс от ±1.5 см! Дренажната система работи перфектно дори при силни дъждове.',
    project: 'Жилищен комплекс 3500 м²',
    date: 'Май 2024'
  },
  {
    id: 2,
    name: 'Мария Димитрова',
    role: 'Мениджър строителна фирма',
    location: 'Пловдив',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19269c7c0-1763301128065.png",
    alt: 'Professional Bulgarian woman in construction helmet reviewing blueprints on site',
    rating: 5,
    text: 'Работихме с тях за индустриален парк от 8000 м². Завършиха 2 дни преди срока с носимост 250 kN/m². Техниката им е модерна, екипът е професионален. Определено ще ги препоръчам!',
    project: 'Индустриален парк 8000 м²',
    date: 'Юни 2024'
  },
  {
    id: 3,
    name: 'Георги Стоянов',
    role: 'Директор спортен клуб',
    location: 'Варна',
    image: "https://images.unsplash.com/photo-1616237196963-fed6b7a2c09c",
    alt: 'Athletic Bulgarian man in sports jacket standing on sports field',
    rating: 5,
    text: 'Заравниха терена за нашето футболно игрище с наклон точно 0.5% за отводняване. Дренажната система е изградена перфектно. Работиха тихо и внимателно заради близките жилищни сгради.',
    project: 'Спортен комплекс 5200 м²',
    date: 'Юли 2024'
  },
  {
    id: 4,
    name: 'Петър Николов',
    role: 'Собственик земеделска земя',
    location: 'Стара Загора',
    image: "https://images.unsplash.com/photo-1709532919690-4a8fa05b7495",
    alt: 'Experienced Bulgarian farmer in work clothes standing in agricultural field',
    rating: 5,
    text: 'Подготвиха 12000 м² за оранжерии. Запазиха плодородния слой от 40 см и направиха напоителни канали 680 м. Наклонът е идеален за напояване. Професионалисти с голям опит!',
    project: 'Земеделска земя 12000 м²',
    date: 'Август 2024'
  }];


  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Какво казват клиентите
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реални отзиви от собственици и строителни фирми
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials?.map((testimonial) =>
          <div
            key={testimonial?.id}
            className="bg-card rounded-lg shadow-sm p-6 border border-border hover:shadow-md transition-all duration-300">

              <div className="flex items-start space-x-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                  src={testimonial?.image}
                  alt={testimonial?.alt}
                  className="w-full h-full object-cover" />

                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-heading font-bold text-foreground">
                    {testimonial?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{testimonial?.role}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Icon name="MapPinIcon" size={14} className="text-primary" />
                    <span className="text-xs text-muted-foreground">{testimonial?.location}</span>
                  </div>
                </div>
                
                <div className="flex space-x-1">
                  {[...Array(testimonial?.rating)]?.map((_, index) =>
                <Icon key={index} name="StarIcon" size={16} className="text-primary" variant="solid" />
                )}
                </div>
              </div>
              
              <p className="text-foreground leading-relaxed mb-4 italic">
                "{testimonial?.text}"
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Icon name="BriefcaseIcon" size={16} className="text-primary" />
                  <span className="text-sm font-semibold text-foreground">{testimonial?.project}</span>
                </div>
                <span className="text-xs text-muted-foreground">{testimonial?.date}</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-6 py-3 rounded-lg">
            <Icon name="CheckBadgeIcon" size={20} variant="solid" />
            <span className="font-semibold">100% удовлетвореност на клиентите през 2024</span>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;