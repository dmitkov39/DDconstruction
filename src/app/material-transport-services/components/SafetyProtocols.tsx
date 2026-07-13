import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Protocol {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface SafetyProtocolsProps {
  protocols: Protocol[];
}

const SafetyProtocols = ({ protocols }: SafetyProtocolsProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-6">
              <Icon name="ShieldCheckIcon" size={20} className="text-success" />
              <span className="text-sm font-semibold text-foreground">
                Безопасност и застраховка
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Пълна защита на вашите материали
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Всички наши превозни средства са напълно застраховани, а екипът ни следва строги протоколи за безопасност при товарене, транспорт и разтоварване.
            </p>

            <div className="space-y-6">
              {protocols.map((protocol) =>
              <div
                key={protocol.id}
                className="flex items-start space-x-4 bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">

                  <div className="bg-success/10 p-3 rounded-lg flex-shrink-0">
                    <Icon
                    name={protocol.icon as any}
                    size={28}
                    className="text-success" />

                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                      {protocol.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {protocol.description}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
              <div className="flex items-start space-x-3">
                <Icon
                  name="DocumentCheckIcon"
                  size={24}
                  className="text-primary flex-shrink-0 mt-1" />

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Сертификати и лицензи
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Всички наши водачи притежават необходимите категории свидетелства и сертификати за превоз на специализирани товари. Фирмата разполага с всички изискуеми лицензи за транспортна дейност.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_187969474-1764835372894.png"
                alt="Professional truck driver in safety vest checking cargo securing straps on construction materials loaded on flatbed truck"
                className="w-full h-[600px] object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-card/95 backdrop-blur-sm p-6 rounded-xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon name="CheckBadgeIcon" size={32} className="text-success" />
                    <h3 className="text-xl font-heading font-bold text-foreground">
                      100% Застрахован транспорт
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Пълна застрахователна покритие на всички превозвани материали и оборудване
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <p className="text-4xl font-heading font-bold mb-1">0</p>
                <p className="text-sm font-semibold">Инциденти</p>
                <p className="text-xs opacity-80 mt-1">през 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default SafetyProtocols;
