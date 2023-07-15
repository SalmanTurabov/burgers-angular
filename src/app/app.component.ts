import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currency = '$';

  form = this.fb.group({
    order: ["", Validators.required],
    nam: ["", Validators.required],
    phone: ["", Validators.required],
  });

  productsData = [
    {
      image: "Burger1.png",
      title: "Бургер чеддер & бекон",
      text: "Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус",
      price: 8,
      basePrice: 8,
      grams: 360
    },
    {
      image: "Burger2.png",
      title: "BBQ с беконом и курицей",
      text: "Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ",
      price: 7,
      basePrice: 7,
      grams: 390
    },
    {
      image: "Burger3.png",
      title: "Дабл биф бургер",
      text: "Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий томат, бекон, красный лук, соус, бургер, горчица",
      price: 10,
      basePrice: 10,
      grams: 420
    },
    {
      image: "Burger4.png",
      title: "Баварский бургер",
      text: "Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат, айсберг",
      price: 7,
      basePrice: 7,
      grams: 220
    },
    {
      image: "Burger5.png",
      title: "Бекон чизбургер",
      text: "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень",
      price: 8,
      basePrice: 8,
      grams: 220
    },
    {
      image: "Burger6.png",
      title: "Индиана бургер",
      text: "Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
      price: 9,
      basePrice: 9,
      grams: 320
    },
    {
      image: "Burger1.png",
      title: "Бургер чеддер & бекон",
      text: "Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус",
      price: 8,
      basePrice: 8,
      grams: 360
    },
    {
      image: "Burger2.png",
      title: "BBQ с беконом и курицей",
      text: "Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ",
      price: 7,
      basePrice: 7,
      grams: 390
    },
    {
      image: "Burger3.png",
      title: "Дабл биф бургер",
      text: "Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий томат, бекон, красный лук, соус, бургер, горчица",
      price: 10,
      basePrice: 10,
      grams: 420
    },
    {
      image: "Burger4.png",
      title: "Баварский бургер",
      text: "Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат, айсберг",
      price: 7,
      basePrice: 7,
      grams: 220
    },
    {
      image: "Burger5.png",
      title: "Бекон чизбургер",
      text: "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень",
      price: 8,
      basePrice: 8,
      grams: 220
    },
    {
      image: "Burger6.png",
      title: "Индиана бургер",
      text: "Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
      price: 9,
      basePrice: 9,
      grams: 320
    },
  ];

  constructor(private fb: FormBuilder) {
  }
  scrollTo(target: HTMLElement, burger?: any) {
    target.scrollIntoView({ behavior: "smooth" })
    if (burger) {
      this.form.patchValue({order: burger.title + ' (' + burger.price + ' ' + this.currency + ')'});
    };
  }

  confirmOrder() {
    if (this.form.valid) {
      alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
      // очистка формы
      this.form.reset();
    }
  }

  changeCurrency() {

    let newCurrency = "$";
    let coefficient = 1;

    // если у нас стоит доллар, то меняем на рубль
    if (this.currency === "$") {
        newCurrency = "₽";
        coefficient = 80;
    }
    else if (this.currency === "₽") {
        newCurrency = "BYN";
        coefficient = 3;
    }
    else if (this.currency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    }
    else if (this.currency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }
    // замена текста в кнопке
    this.currency = newCurrency;

    this.productsData.forEach((item: any) => {
      item.price = (item.basePrice * coefficient).toFixed(1);
    })
  }
}
