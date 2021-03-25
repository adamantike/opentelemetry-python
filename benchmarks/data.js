window.BENCHMARK_DATA = {
  "lastUpdate": 1616703483498,
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
      }
    ]
  }
}