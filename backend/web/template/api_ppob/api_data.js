define({ "api": [
  {
    "type": "POST",
    "url": "https://production.kontrolgampang.com/ppob/test-apis/get-info-kelompok",
    "title": "get-info-kelompok",
    "sampleRequest": [
      {
        "url": "https://production.kontrolgampang.com/ppob/test-apis/get-info-kelompok"
      }
    ],
    "version": "1.0.0",
    "name": "Sibisnis___Produk",
    "group": "1_API_SIBISNIS",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List produk PPOB dari Sibisnis, terdapat Detail produk dan HPP produk.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "apikey",
            "defaultValue": "55c450f34a57c3160d5a8bf050f14068",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": "<p>page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "function",
            "description": "<p>param function.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "param",
            "description": "<p>param:{ &quot;memberid&quot;:&quot;ZON13121710&quot;,  &quot;tipe&quot;:&quot;PRE&quot; }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "               { \n\t\t\t\t\t\"apikey\": \"55c450f34a57c3160d5a8bf050f14068\",\n\t\t\t\t\t\"page\": \"host2host-ppob\",\n\t\t\t\t\t\"function\": \"get-info-kelompok\",\n\t\t\t\t\t\"param\": {\n\t\t\t\t\t\t\"memberid\":\"ZON13121710\",\t\n\t\t\t\t\t\t\"tipe\":\"PRE\"\n\t\t\t\t\t},\t\t\n\t\t\t\t  }",
          "type": "Object"
        }
      ]
    },
    "filename": "./example.js",
    "groupTitle": "1_API_SIBISNIS"
  },
  {
    "type": "post",
    "url": "http://dev.api.aptmi.com",
    "title": "get-info-kelompok",
    "sampleRequest": [
      {
        "url": "http://dev.api.aptmi.com/"
      }
    ],
    "version": "1.0.0",
    "name": "Sibisnis___Produk",
    "group": "1_API_SIBISNIS",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List produk PPOB dari Sibisnis, terdapat Detail produk dan HPP produk.</p>",
    "parameter": {
      "fields": {
        "data": [
          {
            "group": "data",
            "type": "Object",
            "optional": false,
            "field": "apikey",
            "description": "<p>apikey.</p>"
          },
          {
            "group": "data",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": "<p>page.</p>"
          },
          {
            "group": "data",
            "type": "Object",
            "optional": false,
            "field": "function",
            "description": "<p>param function.</p>"
          },
          {
            "group": "data",
            "type": "Object",
            "optional": true,
            "field": "param",
            "description": "<p>param:{ &quot;memberid&quot;:&quot;ZON13121710&quot;,  &quot;tipe&quot;:&quot;PRE&quot; }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "               { \n\t\t\t\t\t\"apikey\": \"55c450f34a57c3160d5a8bf050f14068\",\n\t\t\t\t\t\"page\": \"host2host-ppob\",\n\t\t\t\t\t\"function\": \"get-info-kelompok\",\n\t\t\t\t\t\"param\": {\n\t\t\t\t\t\t\"memberid\":\"ZON13121710\",\t\n\t\t\t\t\t\t\"tipe\":\"PRE\"\n\t\t\t\t\t},\t\t\n\t\t\t\t  }",
          "type": "Object"
        }
      ]
    },
    "filename": "./example.js",
    "groupTitle": "1_API_SIBISNIS"
  },
  {
    "type": "post",
    "url": "/login/user-resets",
    "title": "List Produk",
    "version": "1.0.0",
    "name": "KontrolGampang___Produk",
    "group": "2_API_KG_PPOB",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List produk PPOB dari Konrol Gampang, terdapat Detail produk dan HPP produk dari Sibisnis dan HPP produk dari Kontrol Gampang untuk client Kontrol Gampang.</p>",
    "parameter": {
      "fields": {
        "Parameter Body Param": [
          {
            "group": "Parameter Body Param",
            "type": "String",
            "optional": false,
            "field": "e-mail",
            "description": "<p>masukan email dari user/pengguna.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "USER",
            "description": "<p>Detail data user.</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "PROFILE",
            "description": "<p>Detai profile user.</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "USER_PERMISSIONS",
            "description": "<p>Detail permission user.</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "LIST_STORES",
            "description": "<p>Data Store/toko dari user id.</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "LIST_MERCHANTS",
            "description": "<p>data list merchants per-toko.</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "LIST_KARYAWANS",
            "description": "<p>data karyawan per-toko.</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "LIST_USERS",
            "description": "<p>data user operational login.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"USER\": {\n\t\t\"PROFILE\": {},\n\t\t\"USER_PERMISSIONS\": [{}],\n\t\t\"LIST_STORES\": [{\n\t\t\t\"LIST_MERCHANTS\": [{}],\n\t\t\t\"LIST_KARYAWANS\": [{}],\n\t\t\t\"LIST_USERS\": [{}]\t\t\n\t\t}],\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error-Response-Definition": [
          {
            "group": "Error-Response-Definition",
            "type": "result",
            "optional": false,
            "field": "wrong-password",
            "description": "<p>Password salah.</p>"
          },
          {
            "group": "Error-Response-Definition",
            "type": "result",
            "optional": false,
            "field": "wrong-username",
            "description": "<p>Username salah atau tidak ditemukan.</p>"
          },
          {
            "group": "Error-Response-Definition",
            "type": "result",
            "optional": false,
            "field": "wrong-sosmed",
            "description": "<p>Login sosmed salah atau tidak ditemukan.</p>"
          },
          {
            "group": "Error-Response-Definition",
            "type": "result",
            "optional": false,
            "field": "Active-Code",
            "description": "<p>User belum melakukan authorize from email notify code. &quot;status=0&quot;.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTPS/1.1 404 Not Found\n{\n \"result\": \"wrong-password\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./example.js",
    "groupTitle": "2_API_KG_PPOB",
    "sampleRequest": [
      {
        "url": "http://dev.api.aptmi.com/login/user-resets"
      }
    ]
  },
  {
    "type": "post",
    "url": "https://production.kontrolgampang.com/laporan/sales-charts/produk-daily-refund",
    "title": "4. Produk Refund",
    "sampleRequest": [
      {
        "url": "https://production.kontrolgampang.com/laporan/sales-charts/produk-daily-refund"
      }
    ],
    "version": "1.0.0",
    "name": "Harian___Refund___Toko",
    "group": "CHART_HARIAN",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>jumlah pengembalian atau refund produk harian Toko.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ACCESS_GROUP",
            "description": "<p>max char 35.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "STORE_ID",
            "description": "<p>max char 35.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "TGL",
            "description": "<p>format tanggal &quot;yyyy-mm-dd&quot;.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "chart",
            "description": "<p>Definition chart and default respon.</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "categories",
            "description": "<p>Definition categories data  and default respon..</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "dataset",
            "description": "<p>value chart respon by input param.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"chart\": {},\n  \"categories\": {},\n  \"dataset\": {},\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./example.js",
    "groupTitle": "CHART_HARIAN"
  }
] });
