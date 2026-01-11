import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Equipment {
  id: number;
  name: string;
  image: string;
  alt: string;
  capacity: string;
  usage: string;
  features: string[];
}

const EquipmentShowcase = () => {
  const equipment: Equipment[] = [
  {
    id: 1,
    name: 'Мини челен товарач',
    image: "https://images.unsplash.com/photo-1676365277355-74625bf986be",
    alt: 'Жълт мини челен товарач на строителна площадка с кофа за товарене',
    capacity: '1.5 м³',
    usage: 'Товарене и транспорт',
    features: ['Компактен размер', 'Маневреност', 'Универсално приложение']
  },
  {
    id: 2,
    name: 'Самосвал 10 тона',
    image: "https://images.unsplash.com/photo-1609244210972-1c45a60970ec",
    alt: 'Оранжев самосвал с повдигната каросерия за изсипване на материали',
    capacity: '10 тона',
    usage: 'Транспорт на отпадъци',
    features: ['Голям капацитет', 'Бърза разтоварка', 'Надеждност']
  },
  {
    id: 3,
    name: 'Контейнери за отпадъци',
    image: "https://images.unsplash.com/photo-1684987730967-c1f89cb19a06",
    alt: 'Зелени метални контейнери за строителни отпадъци на площадка',
    capacity: '5-20 м³',
    usage: 'Събиране на отпадъци',
    features: ['Различни размери', 'Лесно товарене', 'Безопасно съхранение']
  },
  {
    id: 4,
    name: 'Високонапорна водоструйка',
    image: "https://images.unsplash.com/photo-1630868837435-5f7abc85e012",
    alt: 'Синя професионална водоструйка с маркуч за почистване на повърхности',
    capacity: '200 bar',
    usage: 'Почистване на повърхности',
    features: ['Висок натиск', 'Ефективност', 'Екологично']
  }];


  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Нашата техника и оборудване
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Разполагаме със собствена модерна техника за бързо и качествено изпълнение на всички видове почистване
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {equipment.map((item) =>
          <div
            key={item.id}
            className="bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">

              <div className="relative h-64 overflow-hidden bg-muted">
                <AppImage
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-heading font-bold text-white mb-1">
                    {item.name}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-white/90">
                    <div className="flex items-center space-x-1">
                      <Icon name="CubeIcon" size={16} />
                      <span>{item.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="WrenchScrewdriverIcon" size={16} />
                      <span>{item.usage}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-2">
                  {item.features.map((feature, index) =>
                <li key={index} className="flex items-center space-x-3">
                      <Icon name="CheckCircleIcon" size={18} className="text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                )}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <Icon name="TruckIcon" size={48} className="text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Собствена техника = Гарантирани срокове
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Не зависим от наемна техника. Всички машини са наши, редовно поддържани и винаги готови за работа. Това ни позволява да гарантираме сроковете и да реагираме бързо при спешни проекти.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6">
                <div className="text-3xl font-heading font-bold text-primary mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Наличност на техника</p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <div className="text-3xl font-heading font-bold text-primary mb-2">15+</div>
                <p className="text-sm text-muted-foreground">Единици техника</p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <div className="text-3xl font-heading font-bold text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Спазване на срокове</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default EquipmentShowcase;