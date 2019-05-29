module.exports = {
  extends: [
    'tslint-microsoft-contrib',
    'tslint-config-standard',
    'tslint-config-prettier'
  ],
  rules: {
    typedef: false,
    'no-errors': true,
    'no-addition': false,
    'no-var-keyword': true,
    'no-relative-imports': false,
    'no-reserved-keywords': false,
    'import-name': false,
    'interface-name': false
  }
}
