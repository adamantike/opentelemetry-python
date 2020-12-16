window.BENCHMARK_DATA = {
  "lastUpdate": 1608090477361,
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
      }
    ]
  }
}