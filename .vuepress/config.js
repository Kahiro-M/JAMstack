module.exports = {
  themeConfig: {
    // logoのイメージファイルを参照させます。
    logo: 'icon.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Qiita', link: '/contents/' }
    ],

    // サイドバーを追加します。
    sidebar: [
      '/',
      '/contents/',
      '/contents/01',
      '/contents/02',
    ],
    // ヘディングタイトルを自動でサイドメニューに表示させます。
    displayAllHeaders: true,

    // h2までをサイドメニューに表示させます。
    sidebarDepth: 2
  }
}