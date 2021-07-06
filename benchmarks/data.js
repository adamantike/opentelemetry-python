window.BENCHMARK_DATA = {
  "lastUpdate": 1625602205347,
  "repoUrl": "https://github.com/adamantike/opentelemetry-python",
  "entries": {
    "OpenTelemetry Python Benchmarks - Python 3.5 - core": [
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001163739d7cc09a26592b688f9880da02baf208",
          "message": "Remove SDK dependency from auto-instrumentation (#1420)",
          "timestamp": "2020-12-14T15:03:25-08:00",
          "tree_id": "3a2c11fff71c03c32ec35d12b2a7e3336dd0c7f9",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/001163739d7cc09a26592b688f9880da02baf208"
        },
        "date": 1608090475846,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 15931.090762299911,
            "unit": "iter/sec",
            "range": "stddev: 0.0001055957775758048",
            "extra": "mean: 62.7703410218745 usec\nrounds: 1214"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11375.32322330929,
            "unit": "iter/sec",
            "range": "stddev: 0.000019601350190915417",
            "extra": "mean: 87.90958994034472 usec\nrounds: 6382"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c81fd5e19ee91ecbed2e3d09804cc1137704d419",
          "message": "Hide certain implementation specific classes/variables (#1684)",
          "timestamp": "2021-03-10T10:32:30-08:00",
          "tree_id": "566d48dffc438f2518d95b4eb2fd647fdef31dc7",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c81fd5e19ee91ecbed2e3d09804cc1137704d419"
        },
        "date": 1615404221113,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 18468.07578131071,
            "unit": "iter/sec",
            "range": "stddev: 0.00000758050198240204",
            "extra": "mean: 54.14749277842895 usec\nrounds: 1731"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11795.286790327638,
            "unit": "iter/sec",
            "range": "stddev: 0.000016719418274958164",
            "extra": "mean: 84.77962577561227 usec\nrounds: 5641"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - core": [
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001163739d7cc09a26592b688f9880da02baf208",
          "message": "Remove SDK dependency from auto-instrumentation (#1420)",
          "timestamp": "2020-12-14T15:03:25-08:00",
          "tree_id": "3a2c11fff71c03c32ec35d12b2a7e3336dd0c7f9",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/001163739d7cc09a26592b688f9880da02baf208"
        },
        "date": 1608090590809,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 18718.740113121487,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023379646680364347",
            "extra": "mean: 53.422398834364856 usec\nrounds: 1201"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13498.216476639423,
            "unit": "iter/sec",
            "range": "stddev: 0.000002089572227242263",
            "extra": "mean: 74.08386150352838 usec\nrounds: 4881"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c81fd5e19ee91ecbed2e3d09804cc1137704d419",
          "message": "Hide certain implementation specific classes/variables (#1684)",
          "timestamp": "2021-03-10T10:32:30-08:00",
          "tree_id": "566d48dffc438f2518d95b4eb2fd647fdef31dc7",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c81fd5e19ee91ecbed2e3d09804cc1137704d419"
        },
        "date": 1615404228449,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21190.29525212678,
            "unit": "iter/sec",
            "range": "stddev: 0.000005818873833508023",
            "extra": "mean: 47.19141418756939 usec\nrounds: 1748"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14032.94164823922,
            "unit": "iter/sec",
            "range": "stddev: 0.000006942022643193405",
            "extra": "mean: 71.26089632999184 usec\nrounds: 5286"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dc009306fd3372c3246fdffd7be7f011781f794",
          "message": "split zipkin exporter into json/proto packages (#1699)",
          "timestamp": "2021-03-22T12:36:28-07:00",
          "tree_id": "67a196f59526c938c86b25d4f08f4dfaa4d087ff",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/5dc009306fd3372c3246fdffd7be7f011781f794"
        },
        "date": 1616703560806,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16638.134968306254,
            "unit": "iter/sec",
            "range": "stddev: 0.000026921521566980284",
            "extra": "mean: 60.10289025211574 usec\nrounds: 1549"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11449.125645430066,
            "unit": "iter/sec",
            "range": "stddev: 0.0000327952840254486",
            "extra": "mean: 87.34291429487033 usec\nrounds: 6254"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622338220806,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 11643.157643446748,
            "unit": "iter/sec",
            "range": "stddev: 0.000026576640347791998",
            "extra": "mean: 85.88735381100346 usec\nrounds: 1286"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 8245.742636186407,
            "unit": "iter/sec",
            "range": "stddev: 0.00009203529838233275",
            "extra": "mean: 121.2747043075907 usec\nrounds: 5340"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e126544fba25c0f937a09e7c8cfbc7b6e6e518a",
          "message": "Use BatchSpanProcessor in examples (#1928)",
          "timestamp": "2021-07-01T15:53:17-07:00",
          "tree_id": "3cabfd767322315ea28189e45206a005b19a0585",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/0e126544fba25c0f937a09e7c8cfbc7b6e6e518a"
        },
        "date": 1625602201472,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16626.96810454777,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024336307154492455",
            "extra": "mean: 60.14325604717329 usec\nrounds: 1695"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11846.934329811224,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027686751806854568",
            "extra": "mean: 84.41002306256009 usec\nrounds: 4813"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - core": [
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001163739d7cc09a26592b688f9880da02baf208",
          "message": "Remove SDK dependency from auto-instrumentation (#1420)",
          "timestamp": "2020-12-14T15:03:25-08:00",
          "tree_id": "3a2c11fff71c03c32ec35d12b2a7e3336dd0c7f9",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/001163739d7cc09a26592b688f9880da02baf208"
        },
        "date": 1608090698629,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23038.829121342576,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017037842993908756",
            "extra": "mean: 43.40498359240079 usec\nrounds: 4571"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17670.01057586738,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019713832271542876",
            "extra": "mean: 56.59306177019151 usec\nrounds: 6767"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c81fd5e19ee91ecbed2e3d09804cc1137704d419",
          "message": "Hide certain implementation specific classes/variables (#1684)",
          "timestamp": "2021-03-10T10:32:30-08:00",
          "tree_id": "566d48dffc438f2518d95b4eb2fd647fdef31dc7",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c81fd5e19ee91ecbed2e3d09804cc1137704d419"
        },
        "date": 1615404254313,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16648.91169512593,
            "unit": "iter/sec",
            "range": "stddev: 0.000034434283130287996",
            "extra": "mean: 60.06398606178901 usec\nrounds: 3659"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11749.087556275215,
            "unit": "iter/sec",
            "range": "stddev: 0.00007282676583318563",
            "extra": "mean: 85.1129924098572 usec\nrounds: 5797"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dc009306fd3372c3246fdffd7be7f011781f794",
          "message": "split zipkin exporter into json/proto packages (#1699)",
          "timestamp": "2021-03-22T12:36:28-07:00",
          "tree_id": "67a196f59526c938c86b25d4f08f4dfaa4d087ff",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/5dc009306fd3372c3246fdffd7be7f011781f794"
        },
        "date": 1616703541601,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21752.928749763385,
            "unit": "iter/sec",
            "range": "stddev: 0.000010274930879708662",
            "extra": "mean: 45.970821285886736 usec\nrounds: 5008"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14602.693973980422,
            "unit": "iter/sec",
            "range": "stddev: 0.000019114259395636884",
            "extra": "mean: 68.48051474487065 usec\nrounds: 9461"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622338205216,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 15902.838310853665,
            "unit": "iter/sec",
            "range": "stddev: 0.00006683465757685566",
            "extra": "mean: 62.88185671343344 usec\nrounds: 3999"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 12241.605006667136,
            "unit": "iter/sec",
            "range": "stddev: 0.00020246839148894171",
            "extra": "mean: 81.6886347382856 usec\nrounds: 6212"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - core": [
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001163739d7cc09a26592b688f9880da02baf208",
          "message": "Remove SDK dependency from auto-instrumentation (#1420)",
          "timestamp": "2020-12-14T15:03:25-08:00",
          "tree_id": "3a2c11fff71c03c32ec35d12b2a7e3336dd0c7f9",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/001163739d7cc09a26592b688f9880da02baf208"
        },
        "date": 1608090774481,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28369.836425035224,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018500915479370622",
            "extra": "mean: 35.24870517468126 usec\nrounds: 4155"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21492.187569106034,
            "unit": "iter/sec",
            "range": "stddev: 0.000003260036745114588",
            "extra": "mean: 46.528534928545426 usec\nrounds: 8231"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c81fd5e19ee91ecbed2e3d09804cc1137704d419",
          "message": "Hide certain implementation specific classes/variables (#1684)",
          "timestamp": "2021-03-10T10:32:30-08:00",
          "tree_id": "566d48dffc438f2518d95b4eb2fd647fdef31dc7",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c81fd5e19ee91ecbed2e3d09804cc1137704d419"
        },
        "date": 1615404244496,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21635.553941724775,
            "unit": "iter/sec",
            "range": "stddev: 0.00003969201226580932",
            "extra": "mean: 46.22021708773871 usec\nrounds: 4869"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14469.31366583857,
            "unit": "iter/sec",
            "range": "stddev: 0.00005478974149685671",
            "extra": "mean: 69.11177842256312 usec\nrounds: 7582"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dc009306fd3372c3246fdffd7be7f011781f794",
          "message": "split zipkin exporter into json/proto packages (#1699)",
          "timestamp": "2021-03-22T12:36:28-07:00",
          "tree_id": "67a196f59526c938c86b25d4f08f4dfaa4d087ff",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/5dc009306fd3372c3246fdffd7be7f011781f794"
        },
        "date": 1616703539641,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 27963.570595490462,
            "unit": "iter/sec",
            "range": "stddev: 0.000002812315268493103",
            "extra": "mean: 35.76081232492051 usec\nrounds: 4641"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20125.377322812485,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040977485665442694",
            "extra": "mean: 49.688509385932434 usec\nrounds: 7458"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622338205221,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22382.59205065108,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015972239016662417",
            "extra": "mean: 44.67757790237307 usec\nrounds: 4281"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16856.950048835348,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019968589542780833",
            "extra": "mean: 59.32271241849533 usec\nrounds: 5967"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - core": [
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001163739d7cc09a26592b688f9880da02baf208",
          "message": "Remove SDK dependency from auto-instrumentation (#1420)",
          "timestamp": "2020-12-14T15:03:25-08:00",
          "tree_id": "3a2c11fff71c03c32ec35d12b2a7e3336dd0c7f9",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/001163739d7cc09a26592b688f9880da02baf208"
        },
        "date": 1608090909145,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28679.142621164123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030261146938457247",
            "extra": "mean: 34.86854587005812 usec\nrounds: 4829"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21281.1597610319,
            "unit": "iter/sec",
            "range": "stddev: 0.000004247010248303127",
            "extra": "mean: 46.98992025007527 usec\nrounds: 7210"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c81fd5e19ee91ecbed2e3d09804cc1137704d419",
          "message": "Hide certain implementation specific classes/variables (#1684)",
          "timestamp": "2021-03-10T10:32:30-08:00",
          "tree_id": "566d48dffc438f2518d95b4eb2fd647fdef31dc7",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c81fd5e19ee91ecbed2e3d09804cc1137704d419"
        },
        "date": 1615404313865,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 29559.146844938605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010797764921592082",
            "extra": "mean: 33.830475732124505 usec\nrounds: 4883"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20891.879725013652,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017225591355675611",
            "extra": "mean: 47.865487125254184 usec\nrounds: 7068"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dc009306fd3372c3246fdffd7be7f011781f794",
          "message": "split zipkin exporter into json/proto packages (#1699)",
          "timestamp": "2021-03-22T12:36:28-07:00",
          "tree_id": "67a196f59526c938c86b25d4f08f4dfaa4d087ff",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/5dc009306fd3372c3246fdffd7be7f011781f794"
        },
        "date": 1616703560207,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20963.1962224074,
            "unit": "iter/sec",
            "range": "stddev: 0.0000285275678583392",
            "extra": "mean: 47.70264941426764 usec\nrounds: 4695"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14231.282159690212,
            "unit": "iter/sec",
            "range": "stddev: 0.00007583802904724439",
            "extra": "mean: 70.26773756425668 usec\nrounds: 8383"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622338186888,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24978.273948080987,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026667578867835283",
            "extra": "mean: 40.03479191871171 usec\nrounds: 5320"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18514.825227053596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015468045521269433",
            "extra": "mean: 54.0107717862124 usec\nrounds: 6231"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python pypy3 - core": [
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001163739d7cc09a26592b688f9880da02baf208",
          "message": "Remove SDK dependency from auto-instrumentation (#1420)",
          "timestamp": "2020-12-14T15:03:25-08:00",
          "tree_id": "3a2c11fff71c03c32ec35d12b2a7e3336dd0c7f9",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/001163739d7cc09a26592b688f9880da02baf208"
        },
        "date": 1608090996265,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 204911.56600714763,
            "unit": "iter/sec",
            "range": "stddev: 0.00001546750192512423",
            "extra": "mean: 4.88015400733953 usec\nrounds: 136987"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 150529.9418660149,
            "unit": "iter/sec",
            "range": "stddev: 0.0000098813396979619",
            "extra": "mean: 6.643196613269733 usec\nrounds: 98030"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c81fd5e19ee91ecbed2e3d09804cc1137704d419",
          "message": "Hide certain implementation specific classes/variables (#1684)",
          "timestamp": "2021-03-10T10:32:30-08:00",
          "tree_id": "566d48dffc438f2518d95b4eb2fd647fdef31dc7",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c81fd5e19ee91ecbed2e3d09804cc1137704d419"
        },
        "date": 1615404450828,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 254529.93345697137,
            "unit": "iter/sec",
            "range": "stddev: 0.000010910440384811916",
            "extra": "mean: 3.92881099059043 usec\nrounds: 181819"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 117841.84327236217,
            "unit": "iter/sec",
            "range": "stddev: 0.00001365072191147963",
            "extra": "mean: 8.485950085562973 usec\nrounds: 108696"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dc009306fd3372c3246fdffd7be7f011781f794",
          "message": "split zipkin exporter into json/proto packages (#1699)",
          "timestamp": "2021-03-22T12:36:28-07:00",
          "tree_id": "67a196f59526c938c86b25d4f08f4dfaa4d087ff",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/5dc009306fd3372c3246fdffd7be7f011781f794"
        },
        "date": 1616703653960,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 243902.29056602216,
            "unit": "iter/sec",
            "range": "stddev: 0.000048140626105065996",
            "extra": "mean: 4.100002495586686 usec\nrounds: 147059"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 160698.33358212077,
            "unit": "iter/sec",
            "range": "stddev: 0.000013157132343413582",
            "extra": "mean: 6.222839887066878 usec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622338289462,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 213894.30455473173,
            "unit": "iter/sec",
            "range": "stddev: 0.000009188604667873525",
            "extra": "mean: 4.675206299119188 usec\nrounds: 119048"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 150067.87348214057,
            "unit": "iter/sec",
            "range": "stddev: 0.00006129938534372161",
            "extra": "mean: 6.663651431823674 usec\nrounds: 172414"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.5 - propagator": [
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c81fd5e19ee91ecbed2e3d09804cc1137704d419",
          "message": "Hide certain implementation specific classes/variables (#1684)",
          "timestamp": "2021-03-10T10:32:30-08:00",
          "tree_id": "566d48dffc438f2518d95b4eb2fd647fdef31dc7",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c81fd5e19ee91ecbed2e3d09804cc1137704d419"
        },
        "date": 1615404153829,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 47836.008167601125,
            "unit": "iter/sec",
            "range": "stddev: 0.000047730934691518607",
            "extra": "mean: 20.90475435358945 usec\nrounds: 8097"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 109560.74688686644,
            "unit": "iter/sec",
            "range": "stddev: 0.000021422559983101006",
            "extra": "mean: 9.127356543421618 usec\nrounds: 52908"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - propagator": [
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c81fd5e19ee91ecbed2e3d09804cc1137704d419",
          "message": "Hide certain implementation specific classes/variables (#1684)",
          "timestamp": "2021-03-10T10:32:30-08:00",
          "tree_id": "566d48dffc438f2518d95b4eb2fd647fdef31dc7",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c81fd5e19ee91ecbed2e3d09804cc1137704d419"
        },
        "date": 1615404182969,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 69828.82775621272,
            "unit": "iter/sec",
            "range": "stddev: 0.000007661870991769802",
            "extra": "mean: 14.320733028645597 usec\nrounds: 10267"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 137881.05182202093,
            "unit": "iter/sec",
            "range": "stddev: 0.000007829794357304233",
            "extra": "mean: 7.252628165984809 usec\nrounds: 61350"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dc009306fd3372c3246fdffd7be7f011781f794",
          "message": "split zipkin exporter into json/proto packages (#1699)",
          "timestamp": "2021-03-22T12:36:28-07:00",
          "tree_id": "67a196f59526c938c86b25d4f08f4dfaa4d087ff",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/5dc009306fd3372c3246fdffd7be7f011781f794"
        },
        "date": 1616703482338,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 62752.74521163042,
            "unit": "iter/sec",
            "range": "stddev: 0.000012737326786480007",
            "extra": "mean: 15.935557825040979 usec\nrounds: 10428"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 131101.06482213014,
            "unit": "iter/sec",
            "range": "stddev: 0.00000859380279937692",
            "extra": "mean: 7.627703111006294 usec\nrounds: 55866"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622338152560,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 86387.61690041308,
            "unit": "iter/sec",
            "range": "stddev: 6.967209384298934e-7",
            "extra": "mean: 11.575733141855176 usec\nrounds: 12887"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 139364.40691375572,
            "unit": "iter/sec",
            "range": "stddev: 3.5832546229559063e-7",
            "extra": "mean: 7.175433255485671 usec\nrounds: 50506"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e126544fba25c0f937a09e7c8cfbc7b6e6e518a",
          "message": "Use BatchSpanProcessor in examples (#1928)",
          "timestamp": "2021-07-01T15:53:17-07:00",
          "tree_id": "3cabfd767322315ea28189e45206a005b19a0585",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/0e126544fba25c0f937a09e7c8cfbc7b6e6e518a"
        },
        "date": 1625602161292,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 75956.10970508293,
            "unit": "iter/sec",
            "range": "stddev: 0.000007793956752258871",
            "extra": "mean: 13.165497862946511 usec\nrounds: 12166"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 122428.30345414217,
            "unit": "iter/sec",
            "range": "stddev: 0.000012100460499386361",
            "extra": "mean: 8.16804588307122 usec\nrounds: 51021"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - propagator": [
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c81fd5e19ee91ecbed2e3d09804cc1137704d419",
          "message": "Hide certain implementation specific classes/variables (#1684)",
          "timestamp": "2021-03-10T10:32:30-08:00",
          "tree_id": "566d48dffc438f2518d95b4eb2fd647fdef31dc7",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c81fd5e19ee91ecbed2e3d09804cc1137704d419"
        },
        "date": 1615404185493,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 43874.15738569235,
            "unit": "iter/sec",
            "range": "stddev: 0.00003367952502010723",
            "extra": "mean: 22.792460518594634 usec\nrounds: 3394"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 97957.86512655522,
            "unit": "iter/sec",
            "range": "stddev: 0.000051658137096565565",
            "extra": "mean: 10.208470741048355 usec\nrounds: 45046"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dc009306fd3372c3246fdffd7be7f011781f794",
          "message": "split zipkin exporter into json/proto packages (#1699)",
          "timestamp": "2021-03-22T12:36:28-07:00",
          "tree_id": "67a196f59526c938c86b25d4f08f4dfaa4d087ff",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/5dc009306fd3372c3246fdffd7be7f011781f794"
        },
        "date": 1616703482490,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 44727.84094760933,
            "unit": "iter/sec",
            "range": "stddev: 0.000009604434791420007",
            "extra": "mean: 22.35743954579255 usec\nrounds: 7485"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 101060.50366045014,
            "unit": "iter/sec",
            "range": "stddev: 0.000010397843993328263",
            "extra": "mean: 9.895062499983842 usec\nrounds: 48544"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622338155028,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 67268.81092001624,
            "unit": "iter/sec",
            "range": "stddev: 0.000007373681091591827",
            "extra": "mean: 14.865730289019336 usec\nrounds: 9588"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 118649.96922843129,
            "unit": "iter/sec",
            "range": "stddev: 0.000005228071372691556",
            "extra": "mean: 8.428152206889715 usec\nrounds: 49505"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e126544fba25c0f937a09e7c8cfbc7b6e6e518a",
          "message": "Use BatchSpanProcessor in examples (#1928)",
          "timestamp": "2021-07-01T15:53:17-07:00",
          "tree_id": "3cabfd767322315ea28189e45206a005b19a0585",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/0e126544fba25c0f937a09e7c8cfbc7b6e6e518a"
        },
        "date": 1625602140054,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 75698.03520804965,
            "unit": "iter/sec",
            "range": "stddev: 4.903582240629162e-7",
            "extra": "mean: 13.210382505326386 usec\nrounds: 13124"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 123792.06303115663,
            "unit": "iter/sec",
            "range": "stddev: 3.438466459862402e-7",
            "extra": "mean: 8.078062320912405 usec\nrounds: 56177"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.5 - exporter": [
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c81fd5e19ee91ecbed2e3d09804cc1137704d419",
          "message": "Hide certain implementation specific classes/variables (#1684)",
          "timestamp": "2021-03-10T10:32:30-08:00",
          "tree_id": "566d48dffc438f2518d95b4eb2fd647fdef31dc7",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c81fd5e19ee91ecbed2e3d09804cc1137704d419"
        },
        "date": 1615404198201,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2207.805314846332,
            "unit": "iter/sec",
            "range": "stddev: 0.000012982077855502344",
            "extra": "mean: 452.93848749956567 usec\nrounds: 80"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2870.5774052026645,
            "unit": "iter/sec",
            "range": "stddev: 0.0009764046305173293",
            "extra": "mean: 348.361970029998 usec\nrounds: 4004"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - exporter": [
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c81fd5e19ee91ecbed2e3d09804cc1137704d419",
          "message": "Hide certain implementation specific classes/variables (#1684)",
          "timestamp": "2021-03-10T10:32:30-08:00",
          "tree_id": "566d48dffc438f2518d95b4eb2fd647fdef31dc7",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c81fd5e19ee91ecbed2e3d09804cc1137704d419"
        },
        "date": 1615404203655,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2065.1556134576103,
            "unit": "iter/sec",
            "range": "stddev: 0.0000733945355133708",
            "extra": "mean: 484.2250111727603 usec\nrounds: 179"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3148.4783995619077,
            "unit": "iter/sec",
            "range": "stddev: 0.0009046921508178373",
            "extra": "mean: 317.61374006540564 usec\nrounds: 3674"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dc009306fd3372c3246fdffd7be7f011781f794",
          "message": "split zipkin exporter into json/proto packages (#1699)",
          "timestamp": "2021-03-22T12:36:28-07:00",
          "tree_id": "67a196f59526c938c86b25d4f08f4dfaa4d087ff",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/5dc009306fd3372c3246fdffd7be7f011781f794"
        },
        "date": 1616703581084,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2162.0597587883994,
            "unit": "iter/sec",
            "range": "stddev: 0.000043978694691884345",
            "extra": "mean: 462.5219057591599 usec\nrounds: 191"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3089.255456661549,
            "unit": "iter/sec",
            "range": "stddev: 0.0008921076445786207",
            "extra": "mean: 323.70259243004307 usec\nrounds: 4333"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622338255122,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1867.811261395628,
            "unit": "iter/sec",
            "range": "stddev: 0.00008978203916835216",
            "extra": "mean: 535.3860000034481 usec\nrounds: 33"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2536.95693394997,
            "unit": "iter/sec",
            "range": "stddev: 0.00103280364795059",
            "extra": "mean: 394.17302935569677 usec\nrounds: 4190"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - propagator": [
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c81fd5e19ee91ecbed2e3d09804cc1137704d419",
          "message": "Hide certain implementation specific classes/variables (#1684)",
          "timestamp": "2021-03-10T10:32:30-08:00",
          "tree_id": "566d48dffc438f2518d95b4eb2fd647fdef31dc7",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c81fd5e19ee91ecbed2e3d09804cc1137704d419"
        },
        "date": 1615404207846,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 75384.15758484519,
            "unit": "iter/sec",
            "range": "stddev: 0.000014920744176326723",
            "extra": "mean: 13.2653866812068 usec\nrounds: 10091"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 179573.2549754258,
            "unit": "iter/sec",
            "range": "stddev: 0.000002760984079029392",
            "extra": "mean: 5.568757998716723 usec\nrounds: 54946"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dc009306fd3372c3246fdffd7be7f011781f794",
          "message": "split zipkin exporter into json/proto packages (#1699)",
          "timestamp": "2021-03-22T12:36:28-07:00",
          "tree_id": "67a196f59526c938c86b25d4f08f4dfaa4d087ff",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/5dc009306fd3372c3246fdffd7be7f011781f794"
        },
        "date": 1616703490463,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 68556.13967156841,
            "unit": "iter/sec",
            "range": "stddev: 0.000006953496127724578",
            "extra": "mean: 14.586585604012937 usec\nrounds: 10753"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 162796.30012173697,
            "unit": "iter/sec",
            "range": "stddev: 0.000021201006436671202",
            "extra": "mean: 6.142645743497935 usec\nrounds: 64936"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622338155029,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 96754.9486000936,
            "unit": "iter/sec",
            "range": "stddev: 6.661910500934474e-7",
            "extra": "mean: 10.33538867487996 usec\nrounds: 13986"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 173148.35259131953,
            "unit": "iter/sec",
            "range": "stddev: 4.901681962215612e-7",
            "extra": "mean: 5.775394250272139 usec\nrounds: 50506"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - exporter": [
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c81fd5e19ee91ecbed2e3d09804cc1137704d419",
          "message": "Hide certain implementation specific classes/variables (#1684)",
          "timestamp": "2021-03-10T10:32:30-08:00",
          "tree_id": "566d48dffc438f2518d95b4eb2fd647fdef31dc7",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c81fd5e19ee91ecbed2e3d09804cc1137704d419"
        },
        "date": 1615404222656,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1851.1631365098838,
            "unit": "iter/sec",
            "range": "stddev: 0.000050086177026822795",
            "extra": "mean: 540.2009041112195 usec\nrounds: 73"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2613.5099066908297,
            "unit": "iter/sec",
            "range": "stddev: 0.00094718443358949",
            "extra": "mean: 382.62720850604256 usec\nrounds: 3856"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dc009306fd3372c3246fdffd7be7f011781f794",
          "message": "split zipkin exporter into json/proto packages (#1699)",
          "timestamp": "2021-03-22T12:36:28-07:00",
          "tree_id": "67a196f59526c938c86b25d4f08f4dfaa4d087ff",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/5dc009306fd3372c3246fdffd7be7f011781f794"
        },
        "date": 1616703612866,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1895.5210690573292,
            "unit": "iter/sec",
            "range": "stddev: 0.0000684434785978335",
            "extra": "mean: 527.5594222212021 usec\nrounds: 45"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2808.8767140708774,
            "unit": "iter/sec",
            "range": "stddev: 0.000889148847421041",
            "extra": "mean: 356.01420133200145 usec\nrounds: 1803"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622338279667,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1693.111717208207,
            "unit": "iter/sec",
            "range": "stddev: 0.00006666433439892215",
            "extra": "mean: 590.6284799971218 usec\nrounds: 25"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2377.7031875246485,
            "unit": "iter/sec",
            "range": "stddev: 0.0011012761703541466",
            "extra": "mean: 420.573940955628 usec\nrounds: 3726"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - exporter": [
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c81fd5e19ee91ecbed2e3d09804cc1137704d419",
          "message": "Hide certain implementation specific classes/variables (#1684)",
          "timestamp": "2021-03-10T10:32:30-08:00",
          "tree_id": "566d48dffc438f2518d95b4eb2fd647fdef31dc7",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c81fd5e19ee91ecbed2e3d09804cc1137704d419"
        },
        "date": 1615404255602,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2259.1408496675317,
            "unit": "iter/sec",
            "range": "stddev: 0.00009265752948905714",
            "extra": "mean: 442.64615025980595 usec\nrounds: 193"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3127.873166962484,
            "unit": "iter/sec",
            "range": "stddev: 0.0009902243998357327",
            "extra": "mean: 319.70605795730273 usec\nrounds: 5297"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dc009306fd3372c3246fdffd7be7f011781f794",
          "message": "split zipkin exporter into json/proto packages (#1699)",
          "timestamp": "2021-03-22T12:36:28-07:00",
          "tree_id": "67a196f59526c938c86b25d4f08f4dfaa4d087ff",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/5dc009306fd3372c3246fdffd7be7f011781f794"
        },
        "date": 1616703588448,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1696.8488950339918,
            "unit": "iter/sec",
            "range": "stddev: 0.0006679635506321524",
            "extra": "mean: 589.3276666688507 usec\nrounds: 75"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3434.9103765918453,
            "unit": "iter/sec",
            "range": "stddev: 0.0009542388562600744",
            "extra": "mean: 291.1284110394201 usec\nrounds: 5761"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622338252727,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2244.509848782731,
            "unit": "iter/sec",
            "range": "stddev: 0.00003174152958782022",
            "extra": "mean: 445.53157142185484 usec\nrounds: 35"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3247.4349548502314,
            "unit": "iter/sec",
            "range": "stddev: 0.0009590405783581343",
            "extra": "mean: 307.9353440186515 usec\nrounds: 5241"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - propagator": [
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c81fd5e19ee91ecbed2e3d09804cc1137704d419",
          "message": "Hide certain implementation specific classes/variables (#1684)",
          "timestamp": "2021-03-10T10:32:30-08:00",
          "tree_id": "566d48dffc438f2518d95b4eb2fd647fdef31dc7",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c81fd5e19ee91ecbed2e3d09804cc1137704d419"
        },
        "date": 1615404260257,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 76984.06354194433,
            "unit": "iter/sec",
            "range": "stddev: 0.000010232623207551828",
            "extra": "mean: 12.989701426388796 usec\nrounds: 11287"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 157622.09060248436,
            "unit": "iter/sec",
            "range": "stddev: 0.00001697983505278954",
            "extra": "mean: 6.3442883936995464 usec\nrounds: 55556"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dc009306fd3372c3246fdffd7be7f011781f794",
          "message": "split zipkin exporter into json/proto packages (#1699)",
          "timestamp": "2021-03-22T12:36:28-07:00",
          "tree_id": "67a196f59526c938c86b25d4f08f4dfaa4d087ff",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/5dc009306fd3372c3246fdffd7be7f011781f794"
        },
        "date": 1616703478455,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 99549.20696490827,
            "unit": "iter/sec",
            "range": "stddev: 0.000001994153239030298",
            "extra": "mean: 10.04528343809415 usec\nrounds: 13054"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 186410.57096376253,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014402223462087264",
            "extra": "mean: 5.364502639683433 usec\nrounds: 60234"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622338163426,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 102299.64939676778,
            "unit": "iter/sec",
            "range": "stddev: 0.00001689857277499272",
            "extra": "mean: 9.775204567138973 usec\nrounds: 12392"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 166748.58636575085,
            "unit": "iter/sec",
            "range": "stddev: 0.000009459690937359258",
            "extra": "mean: 5.997052339661658 usec\nrounds: 55866"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - exporter": [
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c81fd5e19ee91ecbed2e3d09804cc1137704d419",
          "message": "Hide certain implementation specific classes/variables (#1684)",
          "timestamp": "2021-03-10T10:32:30-08:00",
          "tree_id": "566d48dffc438f2518d95b4eb2fd647fdef31dc7",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c81fd5e19ee91ecbed2e3d09804cc1137704d419"
        },
        "date": 1615404298461,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2568.404602337765,
            "unit": "iter/sec",
            "range": "stddev: 0.000012148805486067346",
            "extra": "mean: 389.34675599389544 usec\nrounds: 209"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3436.8294127297145,
            "unit": "iter/sec",
            "range": "stddev: 0.0009664164231957772",
            "extra": "mean: 290.9658525081541 usec\nrounds: 4902"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dc009306fd3372c3246fdffd7be7f011781f794",
          "message": "split zipkin exporter into json/proto packages (#1699)",
          "timestamp": "2021-03-22T12:36:28-07:00",
          "tree_id": "67a196f59526c938c86b25d4f08f4dfaa4d087ff",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/5dc009306fd3372c3246fdffd7be7f011781f794"
        },
        "date": 1616703598570,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2726.590693001996,
            "unit": "iter/sec",
            "range": "stddev: 0.00001244820391412362",
            "extra": "mean: 366.7583853222182 usec\nrounds: 218"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3136.1494918953026,
            "unit": "iter/sec",
            "range": "stddev: 0.001154853875190331",
            "extra": "mean: 318.86235097666196 usec\nrounds: 5120"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622338250392,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2252.3243683175683,
            "unit": "iter/sec",
            "range": "stddev: 0.000046734214312525066",
            "extra": "mean: 443.98578378254444 usec\nrounds: 37"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3001.8261094485374,
            "unit": "iter/sec",
            "range": "stddev: 0.001055581399075182",
            "extra": "mean: 333.1305557148708 usec\nrounds: 3491"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python pypy3 - propagator": [
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c81fd5e19ee91ecbed2e3d09804cc1137704d419",
          "message": "Hide certain implementation specific classes/variables (#1684)",
          "timestamp": "2021-03-10T10:32:30-08:00",
          "tree_id": "566d48dffc438f2518d95b4eb2fd647fdef31dc7",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c81fd5e19ee91ecbed2e3d09804cc1137704d419"
        },
        "date": 1615404363186,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 353259.576447738,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026589178064755523",
            "extra": "mean: 2.830779592886522 usec\nrounds: 38908"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 808214.1769413284,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030305480544463716",
            "extra": "mean: 1.237295791796958 usec\nrounds: 89278"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dc009306fd3372c3246fdffd7be7f011781f794",
          "message": "split zipkin exporter into json/proto packages (#1699)",
          "timestamp": "2021-03-22T12:36:28-07:00",
          "tree_id": "67a196f59526c938c86b25d4f08f4dfaa4d087ff",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/5dc009306fd3372c3246fdffd7be7f011781f794"
        },
        "date": 1616703521935,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 383267.8605656669,
            "unit": "iter/sec",
            "range": "stddev: 3.958530145029013e-7",
            "extra": "mean: 2.6091412896559585 usec\nrounds: 48075"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 719437.962579481,
            "unit": "iter/sec",
            "range": "stddev: 2.2968389847756113e-7",
            "extra": "mean: 1.389973912989658 usec\nrounds: 81301"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/adamantike/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622338211103,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 559119.828254102,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031093124327776925",
            "extra": "mean: 1.788525374109103 usec\nrounds: 77520"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 746043.0519360971,
            "unit": "iter/sec",
            "range": "stddev: 8.976763499770901e-7",
            "extra": "mean: 1.3404052184452446 usec\nrounds: 95239"
          }
        ]
      }
    ]
  }
}