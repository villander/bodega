export default function(){
  // this.transition(
  //   this.fromRoute('index'),
  //   this.toRoute('item'),
  //   this.use('crossFade'),
  //   this.reverse('crossFade')
  // );


  var duration = 1000;

  this.transition(
    this.fromRoute('index'),
    this.toRoute('item'),
    this.use('explode', {
      matchBy: 'data-test-item',
      use: ['flyTo', { duration } ]
    }, {
      pick: '.back-button',
      use: ['crossFade', { duration }]
    }, {
      use: ['toLeft', { duration } ]
    }),
    this.reverse('explode', {
      matchBy: 'data-test-item',
      use: ['flyTo', { duration } ]
    }, {
      pick: '.back-button',
      use: ['crossFade', { duration }]
    }, {
      use: ['toRight', { duration } ]
    })
  );
};
